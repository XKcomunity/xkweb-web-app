// import styles from "./page.module.scss";
import { MainTitle } from "@/components/basic/main_title/MainTitle";
import { SecondaryTitle } from "@/components/basic/secondary_title/SecondaryTitle";
import { MainBanner } from "@/components/complex/HomeBanner/MainBanner";
import { AboutSection } from "@/components/complex/about-section/AboutSection";
import { HintSection } from "@/components/complex/hint-section/HintSection";
import { SliderCard } from "@/components/complex/slider/SliderCard";
import Button from "@/components/basic/button/Button";

export default function Home() {
	return (
		<>
			<MainBanner />
			<MainTitle />
			<AboutSection />
			<HintSection />
			<SecondaryTitle secondary_title="Articulos Recientes" />
			<SliderCard />
			{/* <Button /> */}
			<SecondaryTitle secondary_title="Backend" />
			<SliderCard />
		</>
	);
}
