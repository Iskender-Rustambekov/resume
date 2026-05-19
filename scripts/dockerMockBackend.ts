import { createServer } from 'node:http';

import { getContactLinksResponse } from '../src/app/api/main-page/_data/contactLinks';
import { getProcessStepsResponse } from '../src/app/api/main-page/_data/processSteps';
import { getProjectsResponse } from '../src/app/api/main-page/_data/projects';
import { getWorkExperienceResponse } from '../src/app/api/main-page/_data/workExperience';

const port = Number(process.env.MOCK_BACKEND_PORT ?? 3000);

const handlers: Record<string, (request: Request) => Response> = {
	'/api/main-page/contact-links': getContactLinksResponse,
	'/api/main-page/process-steps': getProcessStepsResponse,
	'/api/main-page/projects': getProjectsResponse,
	'/api/main-page/work-experience': getWorkExperienceResponse,
};

const server = createServer(async (incomingRequest, serverResponse) => {
	const host = incomingRequest.headers.host ?? `127.0.0.1:${port}`;
	const url = new URL(incomingRequest.url ?? '/', `http://${host}`);
	const handler = handlers[url.pathname];

	if (!handler) {
		serverResponse.writeHead(404, { 'Content-Type': 'application/json' });
		serverResponse.end(JSON.stringify({ message: 'Not found' }));
		return;
	}

	const request = new Request(url, {
		headers: incomingRequest.headers as HeadersInit,
		method: incomingRequest.method,
	});
	const response = handler(request);

	serverResponse.writeHead(
		response.status,
		Object.fromEntries(response.headers.entries()),
	);
	serverResponse.end(await response.text());
});

server.listen(port, '127.0.0.1', () => {
	console.warn(
		`Docker build mock backend is running on http://127.0.0.1:${port}`,
	);
});
