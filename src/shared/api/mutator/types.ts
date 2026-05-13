import { type AxiosError } from 'axios';

export type TAxiosErrorResponse<T = unknown> = AxiosError<
	{ description: string; code: string; detail: string },
	T
>;
