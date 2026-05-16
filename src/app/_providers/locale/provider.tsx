import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

interface ILocaleProviderProps {
	children: React.ReactNode;
}
export const LocaleProvider = async ({ children }: ILocaleProviderProps) => {
	const messages = await getMessages();

	return (
		<NextIntlClientProvider messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
};
