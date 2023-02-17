// import styles from "./page.module.scss";
import { MainTitle } from "@/components/basic/main_title/MainTitle";
import { SecondaryTitle } from "@/components/basic/secondary_title/SecondaryTitle";
import { HomeBanner } from "@/components/complex/HomeBanner/HomeBanner";
import { HomeSection } from "@/components/complex/home-section/HomeSection";
import { NavBar } from "@/components/complex/navbar/NavBar";
import { SliderCard } from "@/components/complex/slider/SliderCard";
import { Footer } from "@/components/complex/footer/Footer";

export default function Home() {
	return (
		<>
			<NavBar />
			<HomeBanner />
			<MainTitle />
			<HomeSection />
			<SecondaryTitle secondary_title="Frontend" />
			<SliderCard />
			<SecondaryTitle secondary_title="Backend" />
			<SliderCard />
			<Footer />
		</>
	);
}
