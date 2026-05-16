import { ProjectTerminal } from '@/features/projects';
import { SectionHeading } from '@/shared/ui/components';

export const ProjectsSection = () => {
	return (
		<section id="projects" className="relative py-24">
			<div className="container grid gap-14">
				<SectionHeading
					motion="reveal"
					kicker="Selected projects"
					title="Selected work, presented like a terminal session."
				/>

				<ProjectTerminal />
			</div>
		</section>
	);
};
