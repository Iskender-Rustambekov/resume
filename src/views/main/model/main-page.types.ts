export type Metric = {
	value: string;
	label: string;
};

export type ProcessStep = {
	value: string;
	title: string;
	text: string;
	metric: string;
	tone: string;
};


export type ExperienceItem = {
	role: string;
	company: string;
	employmentType: string;
	period: string;
	duration: string;
	location: string;
	mode: string;
	stack: string[];
	description: string;
};
