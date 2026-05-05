import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export enum Theme {
	DARK = 'dark',
	LIGHT = 'light',
}

export type TTheme = (typeof Theme)[keyof typeof Theme];

type TThemeState = {
	theme: TTheme;
};

type TThemeAction = {
	toggleTheme: () => void;
	setTheme: (theme: TTheme) => void;
};

export const useTheme = create<TThemeState & TThemeAction>()(
	persist(
		(set) => ({
			theme: Theme.DARK,
			toggleTheme: () =>
				set((state) => ({
					theme: state.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
				})),
			setTheme: (theme) => set({ theme }),
		}),
		{
			name: 'theme-store',
		},
	),
);
