import { getProjectsResponse } from '../data';

export const dynamic = 'force-dynamic';

export const GET = (request: Request) => getProjectsResponse(request);
