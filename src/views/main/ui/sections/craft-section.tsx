import { processSteps } from '../../model';
import { SectionHeading } from '../components';

export const CraftSection = () => {
	return (
		<section
			id="craft"
			className="container relative grid gap-8 py-24 lg:grid-cols-[0.9fr_1.1fr]"
		>
			<SectionHeading
				motion="reveal"
				kicker="Craft language"
				title="Minimal surface, dramatic depth."
			/>
			<div data-motion="stagger-panel" className="grid gap-4">
				{processSteps.map((item) => (
					<article
						key={item.value}
						className="grid gap-5 rounded-[1.75rem] border border-border bg-card/75 p-6 shadow-xl backdrop-blur-xl sm:grid-cols-[72px_1fr]"
					>
						<span className="text-sm font-semibold text-primary">
							{item.value}
						</span>
						<div>
							<h3 className="text-2xl font-semibold">{item.title}</h3>
							<p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
								{item.text}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};
