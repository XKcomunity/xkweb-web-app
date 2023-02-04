"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./slider.module.scss";
import { HomeCard } from "../HomeCard/HomeCard";
import { HomeCard1 } from "../HomeCard1/HomeCard1";

import image from "../../../../public/images/tech-cards/vuecard.png";
import image1 from "../../../../public/images/tech-cards/react.png";
import image2 from "../../../../public/images/tech-cards/handcard.png";

export const SliderCard = () => {
	// const image =
	// 	"https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVuZ3VhamVzJTIwZGUlMjBwcm9ncmFtYWNpJUMzJUIzbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

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
				<HomeCard1
					image={image}
					title="Vue 3 - Composition"
					description="La mejor manera de hacer web apps modernas con vue. Aprende ya!"
					footer_content="Nivel: Intermedio"
				/>
				<HomeCard1
					image={image1}
					title="React 18 with hooks"
					description="Aprende a dominar los hooks de react y crea magnificas UIs"
					footer_content="Nivel: Avanzado"
				/>
				<HomeCard1
					image={image2}
					title="Arquitecturas Limpias"
					description="Aprende arquitecturas limpias y las mejores herramientas DevOps"
					footer_content="Nivel: Básico"
				/>
				<HomeCard1
					image={image}
					title="Vue 3-Composition"
					description="La mejor manera de hacer web apps modernas con vue. Aprende ya!"
					footer_content="Nivel: Intermedio"
				/>
				<HomeCard1
					image={image1}
					title="React 18 with hooks"
					description="Aprende a dominar los hooks de react y crea magnificas UIs"
					footer_content="Nivel: Avanzado"
				/>
				<HomeCard1
					image={image2}
					title="Arquitecturas Limpias"
					description="Aprende arquitecturas limpias y las mejores herramientas DevOps"
					footer_content="Nivel: Básico"
				/>
				{/* <HomeCard urlImage={image} />
				<HomeCard urlImage={image} />
				<HomeCard urlImage={image} />
				<HomeCard urlImage={image} />
				<HomeCard urlImage={image} />
				<HomeCard urlImage={image} /> */}
			</Carousel>
		</>
	);
};
