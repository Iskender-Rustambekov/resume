import {
	buildMainPageJsonLd,
	serializeJsonLd,
	type AppLocale,
} from '@/shared/config/seo';

interface IMainPageStructuredDataProps {
	locale: AppLocale;
}

export const MainPageStructuredData = ({
	locale,
}: IMainPageStructuredDataProps) => (
	<script
		type="application/ld+json"
		dangerouslySetInnerHTML={{
			__html: serializeJsonLd(buildMainPageJsonLd(locale)),
		}}
	/>
);
