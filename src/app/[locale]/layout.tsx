import { Geist, JetBrains_Mono } from 'next/font/google';

import '@/shared/styles/index.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { ThemeProvider } from '@/entities/theme';
import { TooltipProvider } from '@/shared/ui/shadcn/ui/tooltip';

import type { Metadata } from 'next';

const jetBrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains-mono',
	subsets: ['latin'],
});

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Frontend Developer Portfolio',
	description: 'Premium frontend portfolio built with Next.js, React and GSAP.',
};
type Props = {
	children: React.ReactNode;
	params: Promise<{
		locale: string;
	}>;
};

export default async function RootLayout({ children, params }: Props) {
	const { locale } = await params;
	const messages = await getMessages();
	
	return (
		<html
			lang={locale}
			className={`${geistSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col font-sans">
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider>
						<TooltipProvider>{children}</TooltipProvider>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
