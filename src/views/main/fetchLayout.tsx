import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';

import { serverGetMainPageProjects } from '@/shared/api/generated/portfolio/server/main-page/main-page';

interface IMainPageFetchLayoutProps {
	children: React.ReactNode;
}
export const MainPageFetchLayout = async ({
	children,
}: IMainPageFetchLayoutProps) => {
	const queryClient = new QueryClient();
	await Promise.all([
		queryClient.prefetchQuery({
			queryKey: ['serverGetMainPageProjects'],
			queryFn: serverGetMainPageProjects,
		}),
	]);
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			{children}
		</HydrationBoundary>
	);
};
