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
