import type { Metric } from '../../model';

type MetricCardProps = {
	metric: Metric;
};

export const MetricCard = ({ metric }: MetricCardProps) => {
	return (
		<div
			data-motion="hero-metric"
			className="rounded-[1.5rem] border border-border bg-card/75 p-5 shadow-xl backdrop-blur-xl"
		>
			<p className="text-3xl font-semibold">{metric.value}</p>
			<p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
		</div>
	);
};
