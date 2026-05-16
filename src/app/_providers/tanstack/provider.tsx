'use client';
import React, { useState } from 'react';

import {
	QueryClient,
	type QueryClientConfig,
	QueryClientProvider,
} from '@tanstack/react-query';

interface ITanstackProviderProps {
	children: React.ReactNode;
}

const config: QueryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: 5 * 60_000,
		},
	},
};

export const TanstackProvider = ({ children }: ITanstackProviderProps) => {
	const [queryClient] = useState(() => new QueryClient(config));

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
