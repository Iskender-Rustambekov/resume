import { beforeEach, describe, expect, it } from 'vitest';

import { Theme, useTheme } from './store';

describe('theme store', () => {
	beforeEach(() => {
		localStorage.clear();
		useTheme.setState({ theme: Theme.DARK });
	});

	it('uses dark theme by default', () => {
		expect(useTheme.getState().theme).toBe(Theme.DARK);
	});

	it('toggles theme between dark and light', () => {
		useTheme.getState().toggleTheme();

		expect(useTheme.getState().theme).toBe(Theme.LIGHT);

		useTheme.getState().toggleTheme();

		expect(useTheme.getState().theme).toBe(Theme.DARK);
	});

	it('sets theme explicitly', () => {
		useTheme.getState().setTheme(Theme.LIGHT);

		expect(useTheme.getState().theme).toBe(Theme.LIGHT);

		useTheme.getState().setTheme(Theme.DARK);

		expect(useTheme.getState().theme).toBe(Theme.DARK);
	});
});
