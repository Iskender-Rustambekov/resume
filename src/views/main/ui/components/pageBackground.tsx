import styles from '../main-page.module.css';

export const PageBackground = () => {
	return (
		<>
			{/* <div className={styles.animeGrid} aria-hidden /> */}
			<div
				className={`${styles.noiseLayer} pointer-events-none fixed inset-0 z-50 opacity-[0.035]`}
			/>
		</>
	);
};
