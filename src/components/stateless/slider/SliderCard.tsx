"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./slider.module.scss";
import { ArticleCard } from "../articles-card/ArticleCard";
import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import image from "../../../../public/images/tech-logos/vue.png";
import image1 from "../../../../public/images/article-cards/react.png";
import image2 from "../../../../public/images/article-cards/handcard.png";

export const SliderCard = () => {
	//customs icons for the slider
	const RightArrow = (
		<div className={styles.right_arrow_container}>
			<HiArrowRight size={50} color="white" />
		</div>
	);

	const LeftArrow = (
		<div className={styles.left_arrow_container}>
			<HiArrowLeft size={50} color="white" />
		</div>
	);
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
			breakpoint: { max: 1024, min: 600 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 1,
		},
	};
	return (
		<>
			<div>
				<Carousel
					className={styles.slider}
					responsive={responsive}
					ssr={true}
					infinite={true}
					customLeftArrow={LeftArrow}
					customRightArrow={RightArrow}
				>
					<ArticleCard
						image={image}
						title="Vue 3 - Composition"
						shortDescription="La mejor manera de hacer web apps modernas con vue. Aprende ya!"
						level="Nivel"
						// level_value="Intermedio"
					/>
					<ArticleCard
						image={image1}
						title="React 18 with hooks"
						shortDescription="Aprende a dominar los hooks de react y crea magnificas UIs"
						level="Nivel"
						// level_value="Avanzado"
					/>
					<ArticleCard
						image={image2}
						title="Arquitecturas Limpias"
						shortDescription="Aprende arquitecturas limpias y las mejores herramientas DevOps"
						level="Nivel"
					// 	level_value="Básico"
					 />
					<ArticleCard
						image={image}
						title="Vue 3-Composition"
						shortDescription="La mejor manera de hacer web apps modernas con vue. Aprende ya!"
						level="Nivel"
						// level_value="Avanzado"
					/>
					<ArticleCard
						image={image1}
						title="React 18 with hooks"
						shortDescription="Aprende a dominar los hooks de react y crea magnificas UIs"
						level="Nivel"
						// level_value="Intermedio"
					/>
					<ArticleCard
						image={image2}
						title="Arquitecturas Limpias"
						shortDescription="Aprende arquitecturas limpias y las mejores herramientas DevOps"
						level="Nivel"
						// level_value="Intermedio"
					/>
				</Carousel>
			</div>
		</>
	);
};
