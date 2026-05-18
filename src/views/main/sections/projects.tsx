import { getTranslations } from 'next-intl/server';

import { ProjectTerminal } from '@/features/projects';
import { SectionHeading } from '@/shared/ui/components';

export const ProjectsSection = async () => {
	const t = await getTranslations('mainPage.projects');

	return (
		<section id="projects" className="relative py-24">
			<div className="container grid gap-14">
				<SectionHeading
					motion="reveal"
					kicker={t('kicker')}
					title={t('title')}
				/>

				<ProjectTerminal />
			</div>
		</section>
	);
};
