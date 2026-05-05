import { Header } from './header';

export const MainPageView = () => {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="mx-auto flex w-full max-w-5xl flex-col px-5 py-8 sm:px-8 lg:px-10">
				<Header />
			</div>
		</main>
	);
};
