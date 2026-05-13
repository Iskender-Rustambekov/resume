import { getWorkExperienceResponse } from '../data';

export const dynamic = 'force-dynamic';

export const GET = (request: Request) => getWorkExperienceResponse(request);
