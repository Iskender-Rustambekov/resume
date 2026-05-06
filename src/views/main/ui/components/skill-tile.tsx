type SkillTileProps = {
	skill: string;
};

export const SkillTile = ({ skill }: SkillTileProps) => {
	return (
		<div className="grid min-h-28 place-items-center rounded-[1.25rem] border border-border bg-card/75 p-4 text-center font-medium shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-muted">
			{skill}
		</div>
	);
};
