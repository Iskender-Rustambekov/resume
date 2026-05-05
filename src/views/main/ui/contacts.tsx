import {
	EnvelopeSimpleIcon,
	GithubLogoIcon,
	MapPinIcon,
} from '@phosphor-icons/react';

const contacts = [
	{ label: 'Bishkek, Kyrgyzstan', icon: MapPinIcon },
	{ label: 'frontend@example.com', icon: EnvelopeSimpleIcon },
	{ label: 'github.com/username', icon: GithubLogoIcon },
];

export const ContactsSection = () => {
	return (
		<section className="grid gap-3 border-y border-border py-5 sm:grid-cols-3">
			{contacts.map((contact) => {
				const Icon = contact.icon;

				return (
					<div
						key={contact.label}
						className="flex min-h-10 items-center gap-2 text-sm text-muted-foreground"
					>
						<Icon className="size-4 text-foreground" weight="bold" />
						<span>{contact.label}</span>
					</div>
				);
			})}
		</section>
	);
};
