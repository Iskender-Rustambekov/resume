import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ThemeSwitch } from './ui';
import { Theme, useTheme } from '../../model';

vi.mock('@phosphor-icons/react', () => ({
	MoonIcon: () => <svg data-testid="moon-icon" />,
	SunIcon: () => <svg data-testid="sun-icon" />,
}));

describe('ThemeSwitch', () => {
	beforeEach(() => {
		localStorage.clear();
		useTheme.setState({ theme: Theme.DARK });
	});

	it('shows dark theme state by default', () => {
		render(<ThemeSwitch />);

		expect(screen.getByRole('switch')).not.toBeChecked();
		expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
		expect(screen.queryByTestId('sun-icon')).not.toBeInTheDocument();
	});

	it('shows light theme state when theme is light', () => {
		useTheme.setState({ theme: Theme.LIGHT });

		render(<ThemeSwitch />);

		expect(screen.getByRole('switch')).toBeChecked();
		expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
		expect(screen.queryByTestId('moon-icon')).not.toBeInTheDocument();
	});

	it('toggles theme when user clicks the switch', async () => {
		const user = userEvent.setup();

		render(<ThemeSwitch />);

		await user.click(screen.getByRole('switch'));

		expect(useTheme.getState().theme).toBe(Theme.LIGHT);
		expect(screen.getByRole('switch')).toBeChecked();
		expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
	});
});
