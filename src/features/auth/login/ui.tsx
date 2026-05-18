'use client';

import { type FormEvent } from 'react';

import { useTranslations } from 'next-intl';

import { useLogin } from '@/shared/api/generated/portfolio/endpoints/auth/auth';
import { ROUTES } from '@/shared/config/routes/config';
import { useRouter } from '@/shared/lib/i18n/navigation';
import { Button } from '@/shared/ui/shadcn/ui/button';
import { Input } from '@/shared/ui/shadcn/ui/input';

const DEMO_EMAIL = 'demo@example.com';
const DEMO_PASSWORD = 'demo-password';

export const LoginForm = () => {
	const t = useTranslations('login');
	const router = useRouter();
	const loginMutation = useLogin({
		mutation: {
			onSuccess: () => {
				router.replace(ROUTES.home);
				router.refresh();
			},
		},
	});

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const email = formData.get('email');
		const password = formData.get('password');

		if (typeof email !== 'string' || typeof password !== 'string') {
			return;
		}

		loginMutation.mutate({
			data: {
				email,
				password,
			},
		});
	};

	return (
		<form onSubmit={handleSubmit} className="grid gap-3">
			<div className="grid gap-1.5">
				<label
					htmlFor="email"
					className="text-xs font-medium text-foreground/80"
				>
					{t('email')}
				</label>
				<Input
					id="email"
					name="email"
					type="email"
					autoComplete="email"
					defaultValue={DEMO_EMAIL}
					required
				/>
			</div>

			<div className="grid gap-1.5">
				<label
					htmlFor="password"
					className="text-xs font-medium text-foreground/80"
				>
					{t('password')}
				</label>
				<Input
					id="password"
					name="password"
					type="password"
					autoComplete="current-password"
					defaultValue={DEMO_PASSWORD}
					required
				/>
			</div>

			{loginMutation.isError ? (
				<p className="text-xs text-destructive" role="alert">
					{t('invalidCredentials')}
				</p>
			) : null}

			<Button
				type="submit"
				disabled={loginMutation.isPending}
				className="mt-1 w-full"
			>
				{loginMutation.isPending ? t('submitting') : t('submit')}
			</Button>
		</form>
	);
};
