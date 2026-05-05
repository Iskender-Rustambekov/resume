export function PulseLine() {
	return (
		<svg className="w-full h-[200px]" viewBox="0 0 500 200">
			<path
				d="M20 100 C150 20, 350 180, 480 100"
				stroke="rgba(255,255,255,0.12)"
				strokeWidth="2"
				fill="none"
			/>

			<path
				d="M20 100 C150 20, 350 180, 480 100"
				stroke="url(#pulseGradient)"
				strokeWidth="2"
				fill="none"
				strokeDasharray="80 420"
				className="animate-[movePulse_2.5s_linear_infinite]"
			/>

			<defs>
				<linearGradient id="pulseGradient">
					<stop offset="0%" stopColor="white" />
					<stop offset="50%" stopColor="white" />
					<stop offset="100%" stopColor="white" />
				</linearGradient>
			</defs>
		</svg>
	);
}
