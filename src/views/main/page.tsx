import { ContentParticles } from '@/shared/ui/components';
import { Header } from '@/widgets/layout';

import { MainPageFetchLayout } from './fetchLayout';
import { MotionLayout } from './motionLayout';
import {
	ContactSection,
	ExperienceSection,
	Footer,
	ProjectsSection,
	HeroSection,
	StackSection,
} from './sections';

import styles from './main-page.module.css';

export const MainPageView = () => {
	return (
		<MotionLayout>
			<MainPageFetchLayout>
				<div className={`${styles.root} min-h-screen`}>
					<Header />

					<HeroSection />
					<div data-motion="post-hero-content" className={styles.contentPanel}>
						<ContentParticles />
						<div className={styles.contentInner}>
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
