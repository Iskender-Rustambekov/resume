import { ContentParticles } from '@/shared/ui/components';
import { Header } from '@/widgets/layout';

import { MainPageFetchLayout } from './fetch';
import { MotionLayout } from './motion';
import {
	ContactSection,
	ExperienceSection,
	Footer,
	ProjectsSection,
	HeroSection,
	StackSection,
} from './sections';

import styles from './styles.module.css';

export const MainPageView = () => {
	return (
		<MotionLayout>
			<MainPageFetchLayout>
				<div className={`${styles.root} min-h-screen`}>
					<svg
						className={styles.pathBackdrop}
						viewBox="0 0 1440 1200"
						aria-hidden="true"
					>
						<path
							className={styles.pathPrimary}
							pathLength="1"
							d="M-80 265 C 160 120, 302 170, 478 328 S 805 552, 1042 356 1326 104, 1520 190"
						/>
						<path
							className={styles.pathSecondary}
							pathLength="1"
							d="M-42 728 C 155 610, 318 612, 466 744 S 706 962, 914 812 1176 568, 1510 688"
						/>
						<path
							className={styles.pathMuted}
							pathLength="1"
							d="M250 -60 C 390 148, 362 298, 536 432 S 837 548, 820 780 938 1090, 1188 1260"
						/>
						<path
							className={styles.pathMuted}
							pathLength="1"
							d="M-120 1035 C 168 874, 330 1012, 548 930 S 880 706, 1072 905 1300 1114, 1560 1004"
						/>
					</svg>
					<Header />
					<HeroSection />

					<div
						data-motion="post-hero-content"
						className="relative z-10 mt-0 rounded-t-[2rem] border-t border-border/70 bg-background pt-[8vh] shadow-[0_-2rem_5rem] shadow-foreground/15"
					>
						<ContentParticles />
						<div className="relative z-1">
							<ProjectsSection />

							<ExperienceSection />
							<StackSection />

							<ContactSection />
							<Footer />
						</div>
					</div>
				</div>
			</MainPageFetchLayout>
		</MotionLayout>
	);
};
