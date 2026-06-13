import { Geist, JetBrains_Mono } from 'next/font/google';

import '@/shared/styles/index.css';

import { buildRootMetadata, type AppLocale } from '@/shared/config/seo';
import { routing } from '@/shared/lib/i18n/routing';

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

interface ILocaleParams {
	locale: string;
}

interface IMetadataProps {
	params: Promise<ILocaleParams>;
}

export const generateMetadata = async ({
	params,
}: IMetadataProps): Promise<Metadata> => {
	const { locale } = await params;

	return buildRootMetadata(locale as AppLocale);
};

export const generateStaticParams = () =>
	routing.locales.map((locale) => ({ locale }));

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
			data-scroll-behavior="smooth"
			className={`${geistSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col font-sans">
				<MainProvider locale={locale}>{children}</MainProvider>
			</body>
		</html>
	);
}
