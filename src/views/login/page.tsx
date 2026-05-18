import { getTranslations } from 'next-intl/server';

import { LoginForm } from '@/features/auth';

export const LoginPageView = async () => {
	const t = await getTranslations('login');

	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="mx-auto grid min-h-screen w-full max-w-sm content-center px-4">
				<section className="grid gap-5 border border-border bg-background/85 p-5 shadow-sm">
					<div className="grid gap-1">
						<h1 className="text-xl font-semibold">{t('title')}</h1>
						<p className="text-sm text-muted-foreground">
							{t('description')}
						</p>
					</div>
					<LoginForm />
				</section>
			</div>
		</main>
	);
};
