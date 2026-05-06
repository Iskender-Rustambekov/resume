import { projects } from '../../model';
import { ProjectCard, SectionHeading } from '../components';

export const FramesSection = () => {
	return (
		<section
			id="frames"
			data-motion="showcase-pin"
			className="relative min-h-screen py-20 max-md:min-h-0"
		>
			<div className="container">
				<SectionHeading
					className="max-w-3xl"
					motion="reveal"
					kicker="Selected frames"
					title="Product work staged like key visuals."
				/>
			</div>
			<div
				data-motion="showcase-track"
				className="mt-12 flex w-[250vw] gap-5 pl-[max(1.25rem,calc((100vw-80rem)/2+3rem))] pr-8 max-md:w-auto max-md:flex-col max-md:pr-5"
			>
				{projects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</section>
	);
};
