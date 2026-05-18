import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier/flat';
import boundaries from 'eslint-plugin-boundaries';
import tseslint from 'typescript-eslint';

const nextPlugins = nextVitals[0].plugins;

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,

	globalIgnores([
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
		'src/shared/api/generated/**',
	]),

	// Project plugins
	{
		plugins: {
			boundaries,
			'@typescript-eslint': tseslint.plugin,
		},
	},

	// Common rules
	{
		rules: {
			// Debug leftovers
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'warn',
			'no-alert': 'error',

			// Safer JS
			eqeqeq: ['error', 'always'],
			curly: ['error', 'all'],
			'no-var': 'error',
			'prefer-const': 'error',
			'no-unreachable': 'error',
			'no-unsafe-optional-chaining': 'error',

			// Readability
			'object-shorthand': 'error',
			'prefer-template': 'error',
			'no-else-return': 'warn',
			'no-useless-return': 'warn',

			// Imports
			'no-duplicate-imports': 'error',

			// Unused stuff (TS-aware)
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],

			// TypeScript sanity
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'inline-type-imports',
				},
			],
			'@typescript-eslint/no-empty-object-type': 'warn',
			'@typescript-eslint/no-non-null-assertion': 'warn',
		},
	},

	// React and imports
	{
		plugins: {
			react: nextPlugins.react,
			import: nextPlugins.import,
		},
		rules: {
			'react/jsx-key': 'error',
			'react/no-unescaped-entities': 'off',
			'import/order': [
				'warn',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						['parent', 'sibling', 'index'],
						'object',
						'type',
					],
					pathGroups: [
						{
							pattern: 'react',
							group: 'external',
							position: 'before',
						},
						{
							pattern: 'next/**',
							group: 'external',
							position: 'before',
						},
						{
							pattern: '@/**',
							group: 'internal',
						},
						{
							pattern: './*.scss',
							group: 'index',
							position: 'after',
						},
						{
							pattern: './*.css',
							group: 'index',
							position: 'after',
						},
					],
					pathGroupsExcludedImportTypes: ['react'],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
		},
	},

	// ============ Architecture settings ============

	// Layers hierarchy
	// plugins: boundaries
	{
		settings: {
			'boundaries/elements': [
				{ type: 'app', pattern: 'src/app/**' },
				{ type: 'views', pattern: 'src/views/**' },
				{ type: 'widgets', pattern: 'src/widgets/**' },
				{ type: 'features', pattern: 'src/features/**' },
				{ type: 'entities', pattern: 'src/entities/**' },
				{ type: 'shared', pattern: 'src/shared/**' },
			],
		},

		rules: {
			'boundaries/dependencies': [
				'error',
				{
					default: 'disallow',
					rules: [
						{
							from: { type: 'app' },
							allow: {
								to: {
									type: [
										'app',
										'views',
										'widgets',
										'features',
										'entities',
										'shared',
									],
								},
							},
						},
						{
							from: { type: 'views' },
							allow: {
								to: {
									type: ['views', 'widgets', 'features', 'entities', 'shared'],
								},
							},
						},
						{
							from: { type: 'widgets' },
							allow: {
								to: {
									type: ['widgets', 'features', 'entities', 'shared'],
								},
							},
						},
						{
							from: { type: 'features' },
							allow: {
								to: {
									type: ['entities', 'shared'],
								},
							},
						},
						{
							from: { type: 'entities' },
							allow: {
								to: {
									type: ['entities', 'shared'],
								},
							},
						},
						{
							from: { type: 'shared' },
							allow: {
								to: {
									type: 'shared',
								},
							},
						},
					],
				},
			],
		},
	},

	// Public api
	// plugins: @typescript-eslint
	{
		files: ['**/*.{ts,tsx}'],
		rules: {
			'no-restricted-imports': 'off',

			'@typescript-eslint/no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: [
								'@/views/*/*',
								'@/widgets/*/*',
								'@/features/*/*',
								'@/entities/*/*',
							],
							message:
								"Use Public API import from slice root. Example: '@/views/profile', '@/widgets/header', '@/features/auth', '@/entities/user'.",
						},
					],
				},
			],

			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: [
								'../views/*',
								'../../views/*',
								'../widgets/*',
								'../../widgets/*',
								'../features/*',
								'../../features/*',
								'../entities/*',
								'../../entities/*',
							],
							message: 'Use absolute FSD import from Public API instead.',
						},
					],
				},
			],
		},
	},

	// Keep last
	prettierConfig,
]);

export default eslintConfig;
