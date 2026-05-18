import { type ContactLinks } from '@/shared/api/generated/portfolio/types';

import { type MainPageLocale } from '../_lib/locale';
import { localizedResponse } from '../_lib/localizedResponse';

const contactLinksByLocale: Record<MainPageLocale, ContactLinks> = {
	en: {
		email: 'mailto:your.email@example.com',
		github: 'https://github.com/your-username',
		linkedin: 'https://www.linkedin.com/in/your-username',
		telegram: 'https://t.me/your_username',
		resume: '#',
	},
	ru: {
		email: 'mailto:your.email@example.com',
		github: 'https://github.com/your-username',
		linkedin: 'https://www.linkedin.com/in/your-username',
		telegram: 'https://t.me/your_username',
		resume: '#',
	},
};

export const getContactLinksResponse = (request: Request) =>
	localizedResponse(request, contactLinksByLocale);
