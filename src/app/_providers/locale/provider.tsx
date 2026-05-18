import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';

interface ILocaleProviderProps {
	children: React.ReactNode;
	locale: string;
}
export const LocaleProvider = async ({
	children,
	locale,
}: ILocaleProviderProps) => {
	setRequestLocale(locale);

	const messages = await getMessages();

	return (
		<NextIntlClientProvider messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
};
