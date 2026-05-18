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

					<div
						data-motion="post-hero-content"
						className="relative z-10 mt-0 pt-[8vh] bg-background border-t border-border rounded-t-[2rem] shadow-[0_-2rem_5rem_rgba(0,0,0,0.16)]"
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
