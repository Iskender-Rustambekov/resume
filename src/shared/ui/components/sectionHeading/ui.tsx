interface ISectionHeadingProps {
	kicker: string;
	title: string;
	className?: string;
	motion?: 'reveal';
}

export const SectionHeading = ({
	kicker,
	title,
	className,
	motion,
}: ISectionHeadingProps) => {
	return (
		<div className={className} data-motion={motion}>
			<p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
				{kicker}
			</p>
			<h2 className="max-w-4xl text-[clamp(2.5rem,6vw,6.5rem)] font-semibold leading-[0.94] tracking-normal text-foreground">
				{title}
			</h2>
		</div>
	);
};
