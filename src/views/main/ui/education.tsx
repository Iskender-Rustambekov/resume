import { Section } from '@/shared/ui/components';

export const EducationSection = () => {
	return (
		<Section title="Education">
			<div className="grid gap-3 md:grid-cols-[180px_1fr]">
				<p className="text-sm text-muted-foreground">2020 - 2024</p>
				<div>
					<h3 className="text-lg font-semibold">Computer Science</h3>
					<p className="mt-2 leading-7 text-muted-foreground">
						University or course name. Replace this block with your real
						education, certificates or mentoring experience.
					</p>
				</div>
			</div>
		</Section>
	);
};
