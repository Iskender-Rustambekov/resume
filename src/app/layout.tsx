import { Geist, JetBrains_Mono } from 'next/font/google';

import '@/shared/styles/index.css';

import { ThemeProvider } from '@/entities/theme';

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col font-sans">
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
