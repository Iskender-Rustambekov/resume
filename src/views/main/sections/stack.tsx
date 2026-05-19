'use client';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { svgIcons } from '@/shared/assets/icons';
import { SectionHeading, Marquee } from '@/shared/ui/components';
import { splitArray } from '@/shared/utils';

export const StackSection = () => {
	const t = useTranslations('mainPage.stack');

	return (
		<section className="container grid gap-10 py-24">
			<SectionHeading motion="reveal" kicker={t('kicker')} title={t('title')} />

			<div className="relative grid gap-3 overflow-hidden rounded-xl bg-[url('/media/images/main-page/space.jpg')] bg-cover bg-center py-4 mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] md:gap-4">
				{splitArray(Object.entries(svgIcons.dev), 3).map((row, index) => (
					<div key={index} className="relative z-10 grid items-center gap-3">
						<Marquee trackClassName="gap-4" reversed={index % 2 === 0}>
							{row.map(([key, icon]) => (
								<div
									key={`${key}-icon`}
									className="flex items-center gap-2 rounded-[1.75rem] border border-border bg-card/75 p-2 md:p-6"
								>
									<Image
										src={icon}
										alt={`${key}-icon`}
										width={60}
										height={60}
										className="h-15 w-15 object-contain max-md:h-10 max-md:w-10"
									/>

									<p className="font-bold">{key}</p>
								</div>
							))}
						</Marquee>
					</div>
				))}
			</div>
		</section>
	);
};
