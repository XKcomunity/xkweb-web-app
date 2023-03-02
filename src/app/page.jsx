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

export default function Home() {
	return (
		<>
			<MainBanner />
			<MainTitle />
			<AboutSection />
			<HintSection />
			<NormalTitle homeTitle="Articulos Recientes" />
			<BlogCategoryTitle blogTitle="Frontend - Backend" />
			<SliderCard />
			<ContainerButton buttonText="Explorar Articulos" route="/snippet-tech"/>
			<NormalTitle homeTitle="Snippets Recientes" />
			<RecentSnippets />
			<ContainerButton buttonText="Explorar Snippets" route="/snippets"/>
			<NormalTitle homeTitle="Our Team" />
			<OurTeam />
		</>
	);
}
