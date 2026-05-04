export function Section({
	title,
	children,
}: Readonly<{
	title: string;
	children: React.ReactNode;
}>) {
	return (
		<section className="border-t border-border py-10">
			<h2 className="mb-6 text-sm font-semibold uppercase tracking-normal text-muted-foreground">
				{title}
			</h2>
			{children}
		</section>
	);
}
