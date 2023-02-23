import { MainTitle } from "@/components/basic/titles/MainTitle";
import { MainBanner } from "@/components/complex/HomeBanner/MainBanner";
import { AboutSection } from "@/components/complex/about-section/AboutSection";
import { HintSection } from "@/components/complex/hint-section/HintSection";
import { NormalTitle } from "@/components/basic/titles/NormalTitle";
import { SliderCard } from "@/components/complex/slider/SliderCard";
import { BlogCategoryTitle } from "@/components/basic/titles/BlogCategoryTitle";

export default function Home() {
	return (
		<>
			<MainBanner />
			<MainTitle />
			<AboutSection />
			<HintSection />
			<NormalTitle homeTitle="Articulos Recientes" />
			<BlogCategoryTitle blogTitle="Frontend" />
			<SliderCard />
			<BlogCategoryTitle blogTitle="Backend" />
			<SliderCard />
			<NormalTitle homeTitle="Snippets Recientes" />
		</>
	);
}
