/** @type {import('orval').Config} */
const toPascalCase = (value) =>
	value
		.replace(/(^|[-_/\s]+)([a-zA-Z0-9])/g, (_, __, char) =>
			char.toUpperCase(),
		)
		.replace(/[^a-zA-Z0-9]/g, '');

module.exports = {
	portfolioApi: {
		input: {
			target: './src/shared/api/schemas/portfolioSchema.yaml',
		},
		output: {
			mode: 'tags-split',
			target: 'src/shared/api/generated/portfolio/endpoints',
			schemas: 'src/shared/api/generated/portfolio/types',
			client: 'react-query',
			httpClient: 'fetch',
			prettier: true,
			mock: false,
			clean: true,
			override: {
				fetch: {
					includeHttpResponseReturnType: false,
				},
				mutator: {
					path: './src/shared/api/client/orvalInstance.ts',
					name: 'portfolioCustomInstance',
				},
			},
		},
	},
	portfolioServerApi: {
		input: {
			target: './src/shared/api/schemas/portfolioSchema.yaml',
		},
		output: {
			mode: 'tags-split',
			target: 'src/shared/api/generated/portfolio/server',
			schemas: 'src/shared/api/generated/portfolio/types',
			client: 'fetch',
			httpClient: 'fetch',
			prettier: true,
			mock: false,
			clean: false,
			override: {
				fetch: {
					includeHttpResponseReturnType: false,
				},
				operationName: (operation, route, verb) => {
					const fallbackName = `${verb}${toPascalCase(route)}`;

					return `server${toPascalCase(operation.operationId ?? fallbackName)}`;
				},
				mutator: {
					path: './src/shared/api/server/orvalInstance.ts',
					name: 'serverApi',
				},
			},
		},
	},
};
