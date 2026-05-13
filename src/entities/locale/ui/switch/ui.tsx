import React from 'react';

import { Link } from '@/shared/lib/i18n/navigation';

export const LocaleSwitch = () => {
	return (
		<div>
			<Link href="/" locale="en">
				EN
			</Link>

			<Link href="/" locale="ru">
				RU
			</Link>
		</div>
	);
};
