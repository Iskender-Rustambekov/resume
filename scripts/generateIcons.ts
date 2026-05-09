import {
	readdirSync,
	statSync,
	writeFileSync,
	mkdirSync,
	existsSync,
} from 'fs';
import { resolve, join, relative, extname, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SVG_DIR = resolve(__dirname, '../src/shared/assets/icons');
const OUTPUT_FILE = resolve(__dirname, '../src/shared/assets/icons/index.ts');

interface IconTree {
	[key: string]: string | IconTree;
}

// Converts a filename into a valid variable name
function toValidVariableName(filename: string, prefix: string = ''): string {
	// Convert dashes to camelCase
	const camelCase = filename.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
	// Add prefix and Icon suffix
	return `${prefix}${camelCase.charAt(0).toUpperCase() + camelCase.slice(1)}Icon`;
}

// Converts a path into a prefix
function pathToPrefix(path: string): string {
	return path
		.split('/')
		?.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

function buildIconTree(dir: string, baseDir: string): IconTree {
	const tree: IconTree = {};
	const files = readdirSync(dir);

	for (const file of files) {
		const fullPath = join(dir, file);
		const relativePath = relative(baseDir, fullPath);

		if (statSync(fullPath).isDirectory()) {
			tree[file] = buildIconTree(fullPath, baseDir);
		} else if (extname(file) === '.svg') {
			const iconName = basename(file, '.svg');
			// Normalize path separators to forward slashes for imports (Windows uses backslashes)
			const normalizedPath = relativePath.replace(/\\/g, '/');
			const importPath = `@/shared/assets/icons/${normalizedPath}`;
			tree[iconName] = importPath;
		}
	}

	return tree;
}

function generateImports(tree: IconTree, path: string = ''): string[] {
	const imports: string[] = [];

	for (const [key, value] of Object.entries(tree)) {
		if (typeof value === 'string') {
			const prefix = pathToPrefix(path);
			const variableName = toValidVariableName(key, prefix);
			imports.push(`import ${variableName} from '${value}'`);
		} else {
			imports.push(...generateImports(value, path ? `${path}/${key}` : key));
		}
	}

	return imports;
}

function generateExports(tree: IconTree, path: string = ''): string {
	const parts: string[] = [];

	for (const [key, value] of Object.entries(tree)) {
		if (typeof value === 'string') {
			const prefix = pathToPrefix(path);
			const variableName = toValidVariableName(key, prefix);
			parts.push(`'${key}': ${variableName}`);
		} else {
			parts.push(
				`'${key}': ${generateExports(value, path ? `${path}/${key}` : key)}`,
			);
		}
	}

	return `{\n${parts.join(',\n')}\n}`;
}

function generateIconsFile() {
	try {
		const iconTree = buildIconTree(SVG_DIR, SVG_DIR);
		const imports = generateImports(iconTree);
		const exports = generateExports(iconTree);

		const fileContent = `// This file is generated automatically. Do not edit it manually.
${imports.join('\n')}

export const svgIcons = ${exports}

export type SvgIconsType = typeof svgIcons;
`;

		const dir = dirname(OUTPUT_FILE);
		if (!existsSync(dir)) {
			mkdirSync(dir, { recursive: true });
		}

		writeFileSync(OUTPUT_FILE, fileContent);
		console.warn('Icons file generated successfully!');
	} catch (error) {
		console.error('Error generating icons file:', error);
	}
}

generateIconsFile();
