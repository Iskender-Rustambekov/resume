import type { CSSProperties } from 'react';

import styles from '../main-page.module.css';

type ParticleStyle = CSSProperties & {
	'--particle-size': string;
	'--particle-x': string;
	'--particle-y': string;
	'--particle-alpha': number;
};

const particles = Array.from({ length: 36 }, (_, index) => {
	const size = 2 + ((index * 7) % 9);
	const x = (index * 29 + 11) % 100;
	const y = (index * 17 + 7) % 100;
	const alpha = 0.46 + (((index * 13) % 36) / 100);

	return {
		id: index,
		style: {
			'--particle-size': `${size}px`,
			'--particle-x': `${x}%`,
			'--particle-y': `${y}%`,
			'--particle-alpha': alpha,
		} as ParticleStyle,
	};
});

export const ContentParticles = () => {
	return (
		<div
			className={styles.contentParticles}
			data-motion="content-particles"
			aria-hidden
		>
			{particles.map((particle) => (
				<span
					key={particle.id}
					className={styles.contentParticle}
					data-motion="content-particle"
					style={particle.style}
				/>
			))}
		</div>
	);
};
