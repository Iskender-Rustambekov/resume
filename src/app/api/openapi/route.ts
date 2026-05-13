import { openApiDocument } from './document';

export const dynamic = 'force-static';

export const GET = () => Response.json(openApiDocument);
