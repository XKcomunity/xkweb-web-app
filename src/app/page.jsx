// import styles from "./page.module.scss";

import { MainTitle } from "@/components/basic/main_title/MainTitle";
import { HomeBanner } from "@/components/complex/HomeBanner/HomeBanner";
import { NavBar } from "@/components/complex/navbar/NavBar";
import { SliderCard } from "@/components/complex/slider/SliderCard";

export default function Home() {
	return (
		<>
			<NavBar />
			<HomeBanner />
			<MainTitle />
			<SliderCard />
		</>
	);
}
