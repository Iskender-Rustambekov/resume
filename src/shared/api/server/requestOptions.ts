import type { ServerApiOptions } from './orvalInstance';

export const publicStaticRequestOptions = {
	auth: 'none',
	cache: 'force-cache',
} satisfies ServerApiOptions;
