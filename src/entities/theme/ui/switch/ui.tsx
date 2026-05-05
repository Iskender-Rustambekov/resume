'use client';

import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useShallow } from 'zustand/shallow';

import { Switch } from '@/shared/ui/shadcn/ui/switch';

import { Theme, useTheme } from '../../model';

export const ThemeSwitch = () => {
	const [theme, toggleTheme] = useTheme(
		useShallow((state) => [state.theme, state.toggleTheme]),
	);

	const isLightTheme = Theme.LIGHT === theme;

	return (
		<div className="flex items-center gap-x-2">
			<Switch checked={isLightTheme} onCheckedChange={() => toggleTheme()} />
			{isLightTheme ? <SunIcon /> : <MoonIcon />}
		</div>
	);
};
