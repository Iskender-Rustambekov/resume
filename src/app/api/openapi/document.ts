const localeHeaderParameter = {
	name: 'Accept-Language',
	in: 'header',
	required: false,
	description:
		'Preferred response language. Supported language tags are resolved by primary subtag.',
	schema: {
		type: 'string',
		enum: ['en', 'ru'],
		default: 'en',
	},
} as const;

const localizedResponseHeaders = {
	'Content-Language': {
		description: 'Resolved response locale.',
		schema: {
			type: 'string',
			enum: ['en', 'ru'],
		},
	},
	Vary: {
		description: 'Response varies by Accept-Language.',
		schema: {
			type: 'string',
			example: 'Accept-Language',
		},
	},
} as const;

const collectionResponse = (schemaName: string, description: string) => ({
	description,
	headers: localizedResponseHeaders,
	content: {
		'application/json': {
			schema: {
				type: 'array',
				items: {
					$ref: `#/components/schemas/${schemaName}`,
				},
			},
		},
	},
});

export const openApiDocument = {
	openapi: '3.0.3',
	info: {
		title: 'Profile API',
		version: '1.0.0',
		description:
			'Public API contract for localized profile page content. Designed for client and server generation with Orval.',
	},
	servers: [
		{
			url: '/',
			description: 'Current Next.js origin',
		},
	],
	tags: [
		{
			name: 'MainPage',
			description: 'Localized content used by the main profile page.',
		},
	],
	paths: {
		'/api/main-page/projects': {
			get: {
				tags: ['MainPage'],
				operationId: 'getMainPageProjects',
				summary: 'Get profile projects',
				parameters: [localeHeaderParameter],
				responses: {
					'200': collectionResponse(
						'Project',
						'Localized profile project cards.',
					),
				},
			},
		},
		'/api/main-page/process-steps': {
			get: {
				tags: ['MainPage'],
				operationId: 'getMainPageProcessSteps',
				summary: 'Get process steps',
				parameters: [localeHeaderParameter],
				responses: {
					'200': collectionResponse(
						'ProcessStep',
						'Localized process and positioning steps.',
					),
				},
			},
		},
		'/api/main-page/work-experience': {
			get: {
				tags: ['MainPage'],
				operationId: 'getMainPageWorkExperience',
				summary: 'Get work experience',
				parameters: [localeHeaderParameter],
				responses: {
					'200': collectionResponse(
						'ExperienceItem',
						'Localized work experience entries.',
					),
				},
			},
		},
		'/api/main-page/contact-links': {
			get: {
				tags: ['MainPage'],
				operationId: 'getMainPageContactLinks',
				summary: 'Get contact links',
				parameters: [localeHeaderParameter],
				responses: {
					'200': {
						description: 'Localized contact links.',
						headers: localizedResponseHeaders,
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/ContactLinks',
								},
							},
						},
					},
				},
			},
		},
	},
	components: {
		schemas: {
			ProjectAccent: {
				type: 'string',
				enum: ['primary', 'secondary', 'accent'],
			},
			Project: {
				type: 'object',
				additionalProperties: false,
				required: [
					'kicker',
					'title',
					'description',
					'facts',
					'stack',
					'accent',
				],
				properties: {
					kicker: {
						type: 'string',
					},
					title: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					facts: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
					stack: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
					accent: {
						$ref: '#/components/schemas/ProjectAccent',
					},
				},
			},
			ProcessStep: {
				type: 'object',
				additionalProperties: false,
				required: ['value', 'title', 'text', 'metric', 'tone'],
				properties: {
					value: {
						type: 'string',
					},
					title: {
						type: 'string',
					},
					text: {
						type: 'string',
					},
					metric: {
						type: 'string',
					},
					tone: {
						type: 'string',
					},
				},
			},
			ExperienceItem: {
				type: 'object',
				additionalProperties: false,
				required: [
					'role',
					'company',
					'employmentType',
					'period',
					'duration',
					'location',
					'mode',
					'stack',
					'description',
				],
				properties: {
					role: {
						type: 'string',
					},
					company: {
						type: 'string',
					},
					employmentType: {
						type: 'string',
					},
					period: {
						type: 'string',
					},
					duration: {
						type: 'string',
					},
					location: {
						type: 'string',
					},
					mode: {
						type: 'string',
					},
					stack: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
					description: {
						type: 'string',
					},
				},
			},
			ContactLinks: {
				type: 'object',
				additionalProperties: false,
				required: ['email', 'github', 'linkedin', 'telegram', 'resume'],
				properties: {
					email: {
						type: 'string',
						format: 'uri',
						example: 'mailto:your.email@example.com',
					},
					github: {
						type: 'string',
						format: 'uri',
						example: 'https://github.com/your-username',
					},
					linkedin: {
						type: 'string',
						format: 'uri',
						example: 'https://www.linkedin.com/in/your-username',
					},
					telegram: {
						type: 'string',
						format: 'uri',
						example: 'https://t.me/your_username',
					},
					resume: {
						type: 'string',
						example: '#',
					},
				},
			},
		},
	},
} as const;
