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
		<div className="flex items-center gap-x-2 rounded-full border border-border bg-card/70 px-3 py-2">
			<Switch
				size="sm"
				checked={isLightTheme}
				onCheckedChange={() => toggleTheme()}
				aria-label="Toggle theme"
				className="data-checked:bg-primary data-unchecked:bg-input"
			/>
			{isLightTheme ? (
				<SunIcon className="size-4 text-primary" weight="bold" />
			) : (
				<MoonIcon className="size-4 text-primary" weight="bold" />
			)}
		</div>
	);
};
