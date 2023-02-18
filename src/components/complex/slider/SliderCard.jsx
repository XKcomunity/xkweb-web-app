"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./slider.module.scss";
import { HomeCard } from "../HomeCard/HomeCard";
import { HomeCard1 } from "../HomeCard1/HomeCard1";

import image from "../../../../public/images/article-cards/vuecard.png";
import image1 from "../../../../public/images/article-cards/react.png";
import image2 from "../../../../public/images/article-cards/handcard.png";

export const SliderCard = () => {

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
					nivel="Nivel"
					nivel_value="Intermedio"
				/>
				<HomeCard1
					image={image1}
					title="React 18 with hooks"
					description="Aprende a dominar los hooks de react y crea magnificas UIs"
					nivel="Nivel"
					nivel_value="Avanzado"
				/>
				<HomeCard1
					image={image2}
					title="Arquitecturas Limpias"
					description="Aprende arquitecturas limpias y las mejores herramientas DevOps"
					nivel="Nivel"
					nivel_value="Básico"
				/>
				<HomeCard1
					image={image}
					title="Vue 3-Composition"
					description="La mejor manera de hacer web apps modernas con vue. Aprende ya!"
					nivel="Nivel"
					nivel_value="Avanzado"
				/>
				<HomeCard1
					image={image1}
					title="React 18 with hooks"
					description="Aprende a dominar los hooks de react y crea magnificas UIs"
					nivel="Nivel"
					nivel_value="Intermedio"
				/>
				<HomeCard1
					image={image2}
					title="Arquitecturas Limpias"
					description="Aprende arquitecturas limpias y las mejores herramientas DevOps"
					nivel="Nivel"
					nivel_value="Intermedio"
				/>
			</Carousel>
		</>
	);
};
