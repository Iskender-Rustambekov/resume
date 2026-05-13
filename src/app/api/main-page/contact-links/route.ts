import { getContactLinksResponse } from '../data';

export const dynamic = 'force-dynamic';

export const GET = (request: Request) => getContactLinksResponse(request);
