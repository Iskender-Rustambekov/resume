import { type RefObject } from 'react';

import { useGSAP } from '@gsap/react';

import { appGsap } from '@/shared/lib';

export const useParticlesMotion = (rootRef: RefObject<HTMLElement | null>) => {
	useGSAP(
		() => {
			animateContentParticles();
			const cleanupContentParticlePointer = animateContentParticlePointer();

			return () => {
				cleanupContentParticlePointer?.();
			};
		},
		{ scope: rootRef },
	);
};

const animateContentParticlePointer = () => {
	const particlesLayer = document.querySelector<HTMLElement>(
		'[data-motion="content-particles"]',
	);

	if (!particlesLayer || !window.matchMedia('(pointer: fine)').matches) {
		return;
	}

	const moveX = appGsap.quickTo(particlesLayer, 'x', {
		duration: 0.8,
		ease: 'power3.out',
	});
	const moveY = appGsap.quickTo(particlesLayer, 'y', {
		duration: 0.8,
		ease: 'power3.out',
	});

	const handlePointerMove = (event: PointerEvent) => {
		const xProgress = event.clientX / window.innerWidth - 0.5;
		const yProgress = event.clientY / window.innerHeight - 0.5;

		moveX(xProgress * 24);
		moveY(yProgress * 18);
	};

	const handlePointerLeave = () => {
		moveX(0);
		moveY(0);
	};

	window.addEventListener('pointermove', handlePointerMove, { passive: true });
	window.addEventListener('pointerleave', handlePointerLeave);

	return () => {
		window.removeEventListener('pointermove', handlePointerMove);
		window.removeEventListener('pointerleave', handlePointerLeave);
	};
};

const animateContentParticles = () => {
	appGsap.utils
		.toArray<HTMLElement>('[data-motion="content-particle"]')
		.forEach((particle, index) => {
			appGsap.to(particle, {
				x: appGsap.utils.random(-90, 90),
				y: appGsap.utils.random(-220, -520),
				scale: appGsap.utils.random(0.75, 1.65),
				opacity: appGsap.utils.random(0.34, 0.78),
				duration: appGsap.utils.random(9, 18),
				delay: index * 0.11,
				ease: 'sine.inOut',
				repeat: -1,
				yoyo: true,
				repeatRefresh: true,
			});
		});
};
