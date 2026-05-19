import { type ContactLinks } from '@/shared/api/generated/portfolio/types';

import { type MainPageLocale } from '../_lib/locale';
import { localizedResponse } from '../_lib/localizedResponse';

const contactLinksByLocale: Record<MainPageLocale, ContactLinks> = {
	en: {
		email: 'mailto:merlin.monro.2333@gmail.com',
		github: 'https://github.com/Iskender-Rustambekov/resume',
		linkedin: 'https://www.linkedin.com/in/iskender-rustambekov-b3b539237/',
		telegram: 'https://t.me/sogeking228',
		resume: '/media/resume/iskender-rustambekov-resume-en.pdf',
	},
	ru: {
		email: 'mailto:merlin.monro.2333@gmail.com',
		github: 'https://github.com/Iskender-Rustambekov/resume',
		linkedin: 'https://www.linkedin.com/in/iskender-rustambekov-b3b539237/',
		telegram: 'https://t.me/sogeking228',
		resume: '/media/resume/iskender-rustambekov-resume-ru.pdf',
	},
};

export const getContactLinksResponse = (request: Request) =>
	localizedResponse(request, contactLinksByLocale);
