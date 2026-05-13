import { getProcessStepsResponse } from '../data';

export const dynamic = 'force-dynamic';

export const GET = (request: Request) => getProcessStepsResponse(request);
