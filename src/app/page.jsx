import { MainTitle } from "@/components/basic/titles/MainTitle";
import { MainBanner } from "@/components/complex/HomeBanner/MainBanner";
import { AboutSection } from "@/components/complex/about-section/AboutSection";
import { HintSection } from "@/components/complex/hint-section/HintSection";
import { NormalTitle } from "@/components/basic/titles/NormalTitle";
import { SliderCard } from "@/components/complex/slider/SliderCard";
import { BlogCategoryTitle } from "@/components/basic/titles/BlogCategoryTitle";
import { RecentSnippets } from "@/components/complex/recent-snippets/RecentSnippets";
import ContainerButton from "@/components/complex/container-button/ContainerButton";
import { OurTeam } from "@/components/complex/our-team/OurTeam";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<>
			<MainBanner />
			{/* <div className={styles.main_wrapper}> */}
				<MainTitle />
				<AboutSection />
				<HintSection />
				<NormalTitle title="Articulos Recientes" />
				<BlogCategoryTitle blogTitle="Frontend - Backend" />
				<SliderCard />
				<ContainerButton buttonText="Explorar Articulos" route="/snippet-tech"/>
				<NormalTitle title="Snippets Recientes" />
				<RecentSnippets />
				<ContainerButton buttonText="Explorar Snippets" route="/snippets"/>
				<NormalTitle title="Our Team" />
				<OurTeam />
			{/* </div> */}
		</>
	);
}