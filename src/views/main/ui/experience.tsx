import { Section } from '@/shared/ui/components';

const experience = [
	{
		role: 'Frontend Developer',
		company: 'Company Name',
		period: '2024 - Present',
		description:
			'Building production interfaces, improving component systems and collaborating with product teams.',
	},
	{
		role: 'Junior Frontend Developer',
		company: 'Previous Company',
		period: '2022 - 2024',
		description:
			'Implemented landing pages, internal tools and integrations with backend APIs.',
	},
];

export const ExperienceSection = () => {
	return (
		<Section title="Experience">
			<div className="grid gap-6">
				{experience.map((item) => (
					<article
						key={`${item.role}-${item.company}`}
						className="grid gap-3 md:grid-cols-[180px_1fr]"
					>
						<p className="text-sm text-muted-foreground">{item.period}</p>
						<div>
							<h3 className="text-lg font-semibold">{item.role}</h3>
							<p className="mt-1 text-sm text-muted-foreground">
								{item.company}
							</p>
							<p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
								{item.description}
							</p>
						</div>
					</article>
				))}
			</div>
		</Section>
	);
};
