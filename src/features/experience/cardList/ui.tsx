'use client';
import { useQuery } from '@tanstack/react-query';

import { ExperienceCard } from '@/entities/experience';
import { getMainPageWorkExperience } from '@/shared/api/generated/portfolio/endpoints/main-page/main-page';
import { cn } from '@/shared/utils';

interface IExperienceCardListProps {
	classNames?: { wrapper?: string; line?: string };
	showIndex?: boolean;
}

export const ExperienceCardList = ({
	classNames,
	showIndex,
}: IExperienceCardListProps) => {
	const { data: experienceList } = useQuery({
		queryKey: ['serverGetMainPageWorkExperience'],
		queryFn: getMainPageWorkExperience,
	});

	return (
		<div
			data-motion="stagger-panel"
			className={cn('relative grid gap-5', classNames?.wrapper)}
		>
			{experienceList?.map((item, index) => (
				<div key={`${item.company}-${item.period}`} data-motion="stagger-item">
					<ExperienceCard
						item={item}
						{...(showIndex && {
							index: String(experienceList.length - index).padStart(2, '0'),
						})}
					/>
				</div>
			))}
		</div>
	);
};
