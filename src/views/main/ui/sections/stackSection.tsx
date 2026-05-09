import Image from 'next/image';

import { svgIcons } from '@/shared/assets/icons';
import { SectionHeading, Marquee } from '@/shared/ui/components';
import { splitArray } from '@/shared/utils';

export const StackSection = () => {
	return (
		<section className="container grid gap-10 py-24">
			<SectionHeading motion="reveal" kicker="Stack" title="Have experience" />

			<div className="relative md:gap-4 grid rounded-xl gap-2 overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] bg-[url('/media/images/main-page/space.jpg')] bg-cover bg-center py-4">
				{splitArray(Object.entries(svgIcons.dev), 3).map((iconList, index) => (
					<Marquee
						key={`${index}-icon-list`}
						className="z-10"
						trackClassName="gap-4"
						reversed={index % 2 === 0}
					>
						{iconList.map(([key, icon]) => (
							<div
								key={`${key}-icon`}
								className="p-2 md:p-6 rounded-[1.75rem] border border-border bg-card/75 backdrop-blur-xl"
							>
								<Image
									src={icon}
									alt={`${key}-icon`}
									width={60}
									height={60}
									className="object-contain"
								/>
							</div>
						))}
					</Marquee>
				))}
			</div>
		</section>
	);
};
