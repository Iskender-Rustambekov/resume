import { getProjectsResponse } from '../_data/projects';

export const dynamic = 'force-dynamic';

export const GET = (request: Request) => getProjectsResponse(request);
