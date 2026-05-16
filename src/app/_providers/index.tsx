import React from 'react';

import { ThemeProvider } from '@/entities/theme';
import { TooltipProvider } from '@/shared/ui/shadcn/ui/tooltip';

import { LocaleProvider } from './locale';
import { TanstackProvider } from './tanstack';

interface IMainProviderProps {
	children: React.ReactNode;
}

export const MainProvider = ({ children }: IMainProviderProps) => {
	return (
		<div>
			<LocaleProvider>
				<TanstackProvider>
					<ThemeProvider>
						<TooltipProvider>{children}</TooltipProvider>
					</ThemeProvider>
				</TanstackProvider>
			</LocaleProvider>
		</div>
	);
};
