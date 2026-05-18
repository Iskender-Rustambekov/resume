import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { type Project } from '@/shared/api/generated/portfolio/types';

import { ProjectTerminal } from './ui';

const projectsQueryMock = vi.hoisted(() => ({
	projects: [] as Project[],
}));

vi.mock('@tanstack/react-query', () => ({
	useQuery: () => ({
		data: projectsQueryMock.projects,
	}),
}));

vi.mock('next-intl', () => ({
	useTranslations: () => {
		return (key: string, values?: Record<string, string | number>) => {
			switch (key) {
				case 'activeCase':
					return 'Active case';
				case 'availableCommands':
					return 'Available commands';
				case 'facts':
					return 'Facts';
				case 'loading':
					return `Loading ${values?.current}/${values?.total}`;
				case 'readyCommand':
					return 'ready';
				case 'redacted':
					return 'Redacted';
				case 'run':
					return 'run';
				case 'stack':
					return 'Stack';
				case 'toolsLoaded':
					return `Tools loaded ${values?.count}`;
				default:
					return key;
			}
		};
	},
}));

const projects: Project[] = [
	{
		accent: 'primary',
		description: 'First project description',
		facts: ['First fact', 'Second fact'],
		kicker: 'Frontend platform',
		stack: ['Next.js', 'TypeScript'],
		title: 'First Project',
	},
	{
		accent: 'secondary',
		description: 'Second project description',
		facts: ['Third fact'],
		kicker: 'Design system',
		stack: ['React', 'Tailwind'],
		title: 'Second Project',
	},
];

describe('ProjectTerminal', () => {
	beforeEach(() => {
		projectsQueryMock.projects = projects;
	});

	it('renders nothing when project list is empty', () => {
		projectsQueryMock.projects = [];

		const { container } = render(<ProjectTerminal />);

		expect(container).toBeEmptyDOMElement();
	});

	it('renders the first project as active by default', () => {
		render(<ProjectTerminal />);

		expect(screen.getByText('Available commands')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /runcase:first-project/i }))
			.toBeInTheDocument();
		expect(screen.getByRole('button', { name: /runcase:second-project/i }))
			.toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: 'First Project' }),
		).toBeInTheDocument();
		expect(screen.getByText('First project description')).toBeInTheDocument();
		expect(screen.getAllByText('Frontend platform')).toHaveLength(2);
		expect(screen.getByText('First fact')).toBeInTheDocument();
		expect(screen.getByText('Second fact')).toBeInTheDocument();
		expect(screen.getByText('Next.js')).toBeInTheDocument();
		expect(screen.getByText('TypeScript')).toBeInTheDocument();
	});

	it('renders terminal status lines for the active project', () => {
		render(<ProjectTerminal />);

		expect(screen.getByText('Loading 01/2')).toBeInTheDocument();
		expect(screen.getByText('CASE')).toBeInTheDocument();
		expect(screen.getByText('MODE')).toBeInTheDocument();
		expect(screen.getByText('STACK')).toBeInTheDocument();
		expect(screen.getByText('Tools loaded 2')).toBeInTheDocument();
		expect(screen.getByText('Redacted')).toBeInTheDocument();
		expect(screen.getByText('ready')).toBeInTheDocument();
	});

	it('changes the active project when user selects another command', async () => {
		const user = userEvent.setup();

		render(<ProjectTerminal />);

		await user.click(
			screen.getByRole('button', { name: /runcase:second-project/i }),
		);

		expect(
			screen.getByRole('heading', { name: 'Second Project' }),
		).toBeInTheDocument();
		expect(screen.getByText('Second project description')).toBeInTheDocument();
		expect(screen.getAllByText('Design system')).toHaveLength(2);
		expect(screen.getByText('Third fact')).toBeInTheDocument();
		expect(screen.getByText('React')).toBeInTheDocument();
		expect(screen.getByText('Tailwind')).toBeInTheDocument();
		expect(screen.getByText('Loading 02/2')).toBeInTheDocument();

		expect(
			screen.queryByRole('heading', { name: 'First Project' }),
		).not.toBeInTheDocument();
		expect(screen.queryByText('First project description')).not.toBeInTheDocument();
	});
});
