import { Section } from '@/shared/ui/components';

const skills = [
	'React',
	'Next.js',
	'TypeScript',
	'Tailwind CSS',
	'Redux Toolkit',
	'React Query',
	'FSD',
	'REST API',
];

export const SkillsSection = () => {
	return (
		<Section title="Skills">
			<div className="flex flex-wrap gap-2">
				{skills.map((skill) => (
					<span
						key={skill}
						className="border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
					>
						{skill}
					</span>
				))}
			</div>
		</Section>
	);
};
