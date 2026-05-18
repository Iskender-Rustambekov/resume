import { getProcessStepsResponse } from '../_data/processSteps';

export const dynamic = 'force-dynamic';

export const GET = (request: Request) => getProcessStepsResponse(request);
