import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';

import {
	serverGetMainPageProjects,
	serverGetMainPageWorkExperience,
} from '@/shared/api/generated/portfolio/server/main-page/main-page';
import { publicStaticRequestOptions } from '@/shared/api/server/requestOptions';

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
			queryFn: () => serverGetMainPageProjects(publicStaticRequestOptions),
		}),
		queryClient.prefetchQuery({
			queryKey: ['serverGetMainPageWorkExperience'],
			queryFn: () =>
				serverGetMainPageWorkExperience(publicStaticRequestOptions),
		}),
	]);
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			{children}
		</HydrationBoundary>
	);
};
