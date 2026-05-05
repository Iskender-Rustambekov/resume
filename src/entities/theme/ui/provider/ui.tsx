'use client';

import React from 'react';

import { useTheme } from '../../model';

interface IThemeProviderProps {
	children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
	const theme = useTheme((state) => state.theme);
	return <div className={`${theme}`}>{children}</div>;
};
