export type Metric = {
	value: string;
	label: string;
};

export type ProcessStep = {
	value: string;
	title: string;
	text: string;
};

export type Project = {
	kicker: string;
	title: string;
	description: string;
	stack: string[];
	accent: 'primary' | 'secondary' | 'accent';
};
