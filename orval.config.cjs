/** @type {import('orval').Config} */
module.exports = {
	portfolioApi: {
		input: {
			target: './src/shared/api/schemas/portfolioSchema.yaml',
		},
		output: {
			mode: 'tags-split',
			target: 'src/shared/api/generated/portfolio/endpoints',
			schemas: 'src/shared/api/generated/portfolio/types',
			client: 'axios',
			prettier: true,
			mock: false,
			clean: true,
			override: {
				mutator: {
					path: './src/shared/api/mutator/instance.ts',
					name: 'portfolioCustomInstance',
				},
			},
		},
	},
};
