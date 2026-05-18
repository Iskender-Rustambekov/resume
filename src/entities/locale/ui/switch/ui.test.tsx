import { type ReactNode } from 'react';

import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { LocaleSwitch } from './ui';

const navigationMock = vi.hoisted(() => ({
	locale: 'en',
	pathname: '/projects',
}));

vi.mock('@phosphor-icons/react', () => ({
	GlobeHemisphereWestIcon: () => <svg data-testid="globe-icon" />,
}));

vi.mock('next-intl', () => ({
	useLocale: () => navigationMock.locale,
}));

vi.mock('@/shared/lib/i18n/navigation', () => ({
	usePathname: () => navigationMock.pathname,
	Link: ({
		children,
		href,
		locale,
		...props
	}: {
		children: ReactNode;
		href: string;
		locale: string;
	}) => (
		<a data-locale={locale} href={`/${locale}${href}`} {...props}>
			{children}
		</a>
	),
}));

describe('LocaleSwitch', () => {
	beforeEach(() => {
		navigationMock.locale = 'en';
		navigationMock.pathname = '/projects';
	});

	it('renders available locale links', () => {
		render(<LocaleSwitch />);

		expect(screen.getByLabelText('Select language')).toBeInTheDocument();
		expect(screen.getByTestId('globe-icon')).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'EN' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'RU' })).toBeInTheDocument();
	});

	it('marks current locale as active', () => {
		render(<LocaleSwitch />);

		expect(screen.getByRole('link', { name: 'EN' })).toHaveAttribute(
			'aria-current',
			'true',
		);
		expect(screen.getByRole('link', { name: 'RU' })).not.toHaveAttribute(
			'aria-current',
		);
	});

	it('updates active link when current locale changes', () => {
		navigationMock.locale = 'ru';

		render(<LocaleSwitch />);

		expect(screen.getByRole('link', { name: 'RU' })).toHaveAttribute(
			'aria-current',
			'true',
		);
		expect(screen.getByRole('link', { name: 'EN' })).not.toHaveAttribute(
			'aria-current',
		);
	});

	it('keeps the current pathname for every locale link', () => {
		navigationMock.pathname = '/experience';

		render(<LocaleSwitch />);

		expect(screen.getByRole('link', { name: 'EN' })).toHaveAttribute(
			'href',
			'/en/experience',
		);
		expect(screen.getByRole('link', { name: 'RU' })).toHaveAttribute(
			'href',
			'/ru/experience',
		);
	});
});
