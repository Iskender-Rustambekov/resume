import { getWorkExperienceResponse } from '../_data/workExperience';

export const dynamic = 'force-dynamic';

export const GET = (request: Request) => getWorkExperienceResponse(request);
