import { skills } from '../../model';
import { SectionHeading, SkillTile } from '../components';

export const StackSection = () => {
	return (
		<section className="container grid gap-10 py-24 lg:grid-cols-[0.85fr_1.15fr]">
			<SectionHeading
				motion="reveal"
				kicker="Stack"
				title="Engineered for polish and speed."
			/>
			<div
				data-motion="stagger-panel"
				className="grid grid-cols-2 gap-3 sm:grid-cols-4"
			>
				{skills.map((skill) => (
					<SkillTile key={skill} skill={skill} />
				))}
			</div>
		</section>
	);
};
