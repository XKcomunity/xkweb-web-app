"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./slider.module.scss";
import { HomeCard } from "../HomeCard/HomeCard";

export const SliderCard = () => {
	const image =
		"https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVuZ3VhamVzJTIwZGUlMjBwcm9ncmFtYWNpJUMzJUIzbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<>
			<Carousel
				className={styles.slider}
				responsive={responsive}
				ssr={true}
				infinite={true}
				dotListClass="custom-dot-list-style"
				centerMode={true}
			>
				<HomeCard urlImage={image} />
				<HomeCard urlImage={image} />
				<HomeCard urlImage={image} />
				<HomeCard urlImage={image} />
				<HomeCard urlImage={image} />
				<HomeCard urlImage={image} />
			</Carousel>
		</>
	);
};
