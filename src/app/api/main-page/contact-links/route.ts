import { getContactLinksResponse } from '../_data/contactLinks';

export const dynamic = 'force-dynamic';

export const GET = (request: Request) => getContactLinksResponse(request);
