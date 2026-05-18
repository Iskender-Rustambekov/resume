import React from 'react';

import { ThemeProvider } from '@/entities/theme';
import { TooltipProvider } from '@/shared/ui/shadcn/ui/tooltip';

import { LocaleProvider } from './locale';
import { TanstackProvider } from './tanstack';

interface IMainProviderProps {
	children: React.ReactNode;
	locale: string;
}

export const MainProvider = ({ children, locale }: IMainProviderProps) => {
	return (
		<div>
			<LocaleProvider locale={locale}>
				<TanstackProvider>
					<ThemeProvider>
						<TooltipProvider>{children}</TooltipProvider>
					</ThemeProvider>
				</TanstackProvider>
			</LocaleProvider>
		</div>
	);
};
