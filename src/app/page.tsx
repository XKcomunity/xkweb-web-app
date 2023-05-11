import { MainHomeTitle } from "@/components/basic/titles/MainHomeTitle";
import { HomePageBanner } from "@/components/complex/HomeBanner/HomePageBanner";
import { AboutSection } from "@/components/complex/about-section/AboutSection";
import { HintSection } from "@/components/complex/hint-section/HintSection";
import { TitleComponent } from "@/components/basic/titles/TitleComponent";
import { SliderCard } from "@/components/complex/slider/SliderCard";
import { BlogCategoryTitle } from "@/components/basic/titles/BlogCategoryTitle";
import { RecentSnippets } from "@/components/complex/recent-snippets/RecentSnippets";
import ContainerButton from "@/components/complex/container-button/ContainerButton";
import { OurTeam } from "@/components/complex/our-team/OurTeam";
// import styles from "./page.module.scss";

export default function Home() {
	return (
		<>
			<HomePageBanner />
			{/* <div className={styles.main_wrapper}> */}
			<MainHomeTitle />
			<AboutSection />
			<HintSection />
			<TitleComponent title="Articulos Recientes" />
			<BlogCategoryTitle blogTitle="Frontend - Backend" />
			<SliderCard />
			<ContainerButton buttonText="Explorar Articulos" route="/snippet-tech" />
			<TitleComponent title="Snippets Recientes" />
			<RecentSnippets />
			<ContainerButton buttonText="Explorar Snippets" route="/snippets" />
			<TitleComponent title="Our Team" />
			<OurTeam />
			{/* </div> */}
		</>
	);
}
