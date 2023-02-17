// import styles from "./page.module.scss";
import { MainTitle } from "@/components/basic/main_title/MainTitle";
import { SecondaryTitle } from "@/components/basic/secondary_title/SecondaryTitle";
import { HomeBanner } from "@/components/complex/HomeBanner/HomeBanner";
import { HomeSection } from "@/components/complex/home-section/HomeSection";
import { SliderCard } from "@/components/complex/slider/SliderCard";

export default function Home() {
	return (
		<>
			<HomeBanner />
			<MainTitle />
			<HomeSection />
			<SecondaryTitle secondary_title="Frontend" />
			<SliderCard />
			<SecondaryTitle secondary_title="Backend" />
			<SliderCard />
		</>
	);
}
