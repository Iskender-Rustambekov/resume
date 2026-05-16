import { Geist, JetBrains_Mono } from 'next/font/google';

import '@/shared/styles/index.css';

import { MainProvider } from '../_providers';

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

interface IRootLayoutProps {
	children: React.ReactNode;
	params: Promise<{
		locale: string;
	}>;
}

export default async function RootLayout({
	children,
	params,
}: IRootLayoutProps) {
	const { locale } = await params;

	return (
		<html
			lang={locale}
			className={`${geistSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col font-sans">
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	);
}
