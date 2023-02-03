// import styles from "./page.module.scss";
import { MainTitle } from "@/components/basic/main_title/MainTitle";
import { HomeBanner } from "@/components/complex/HomeBanner/HomeBanner";
import { NavBar } from "@/components/complex/navbar/NavBar";
import { SliderCard } from "@/components/complex/slider/SliderCard";

export default function Home() {
	// const image1 =
	// 	"https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVuZ3VhamVzJTIwZGUlMjBwcm9ncmFtYWNpJUMzJUIzbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

	// const image2 =
	// 	"https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGVuZ3VhamVzJTIwZGUlMjBwcm9ncmFtYWNpJUMzJUIzbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

	// const image3 =
	// 	"https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGVuZ3VhamVzJTIwZGUlMjBwcm9ncmFtYWNpJUMzJUIzbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
	return (
		<>
			<NavBar />
			<HomeBanner />
			<MainTitle />
			<SliderCard />
		</>
	);
}
