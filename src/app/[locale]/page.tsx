import { type AppLocale } from '@/shared/config/seo';
import { MainPageStructuredData, MainPageView } from '@/views/main';

interface IHomeProps {
	params: Promise<{
		locale: string;
	}>;
}

export default async function Home({ params }: IHomeProps) {
	const { locale } = await params;
	const appLocale = locale as AppLocale;

	return (
		<>
			<MainPageStructuredData locale={appLocale} />
			{/* <MainPageView /> */}
		</>
	);
}
