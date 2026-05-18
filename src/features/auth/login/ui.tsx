'use client';

import { useState, type FormEvent } from 'react';

import { useTranslations } from 'next-intl';

import { ROUTES } from '@/shared/config/routes/config';
import { useRouter } from '@/shared/lib/i18n/navigation';
import { Button } from '@/shared/ui/shadcn/ui/button';
import { Input } from '@/shared/ui/shadcn/ui/input';

const DEMO_EMAIL = 'demo@example.com';
const DEMO_PASSWORD = 'demo-password';

export const LoginForm = () => {
	const t = useTranslations('login');
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [isPending, setIsPending] = useState(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError(null);
		setIsPending(true);

		const formData = new FormData(event.currentTarget);
		const response = await fetch('/api/auth/login', {
			body: JSON.stringify({
				email: formData.get('email'),
				password: formData.get('password'),
			}),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		setIsPending(false);

		if (!response.ok) {
			setError(t('invalidCredentials'));
			return;
		}

		router.replace(ROUTES.home);
		router.refresh();
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

			{error ? (
				<p className="text-xs text-destructive" role="alert">
					{error}
				</p>
			) : null}

			<Button type="submit" disabled={isPending} className="mt-1 w-full">
				{isPending ? t('submitting') : t('submit')}
			</Button>
		</form>
	);
};
