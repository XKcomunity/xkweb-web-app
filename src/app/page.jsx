// import styles from "./page.module.scss";
import Button from "@/components/basic/button/Button";
import { HomeBanner } from "@/components/complex/HomeBanner/HomeBanner";
import { NavBar } from "@/components/complex/navbar/NavBar";
// import { HomeCard } from "@/components/complex/HomeCard/HomeCard";

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
			{/* <div className={styles.cardwrapper}>
				<HomeCard urlImage={image1} />
				<HomeCard urlImage={image2} />
				<HomeCard urlImage={image3} />
			</div> */}
		</>
	);
}
