import { act, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { ThemeProvider } from './ui';
import { Theme, useTheme } from '../../model';

describe('ThemeProvider', () => {
	beforeEach(() => {
		localStorage.clear();
		useTheme.setState({ theme: Theme.DARK });
	});

	it('renders children inside current theme wrapper', () => {
		render(
			<ThemeProvider>
				<span>Page content</span>
			</ThemeProvider>,
		);

		expect(screen.getByText('Page content').parentElement).toHaveClass(
			Theme.DARK,
		);
	});

	it('updates wrapper class when theme changes', () => {
		render(
			<ThemeProvider>
				<span>Page content</span>
			</ThemeProvider>,
		);

		act(() => {
			useTheme.getState().setTheme(Theme.LIGHT);
		});

		expect(screen.getByText('Page content').parentElement).toHaveClass(
			Theme.LIGHT,
		);
	});
});
