"use client";

import styles from "./home_section.module.scss";
import Image from "next/image";

import vue from "../../../../public/images/tech-logos/vue.jpeg";
import js from "../../../../public/images/tech-logos/js.jpeg";
import css from "../../../../public/images/tech-logos/css3.jpeg";
import html5 from "../../../../public/images/tech-logos/html5.jpeg";

export const HomeSection = () => {
	return (
		<>
			<div className={styles.grid_container}>
				<div className={styles.text_section}>
					<div className={styles.main_title_text_wrapper}>
						<p className={styles.main_text}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Explicabo assumenda laudantium in pariatur adipisci cupiditate
						</p>
					</div>
					<div className={styles.main_subtitle_text_wrapper}>
						<p className={styles.main_subtitle_text}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
							consequuntur, provident neque obcaecati error omnis? Unde
						</p>
					</div>
				</div>
				<div className={styles.image_section1}>
					<div className={styles.image_text_wrapper}>
						<Image
							className={styles.image}
							src={vue}
							width={120}
							height={100}
							alt=""
						/>
						<h1 className={styles.title}>Aprende React</h1>
						<p className={styles.subtitle}>
							React es la libreria de frontend mas popular en la actualidad,
							aprendela y podras encontrar trabajo y estabilidad econmica
						</p>
					</div>
					<div
						className={styles.image_text_wrapper}
						style={{ marginTop: "10%" }}
					>
						<Image
							className={styles.image}
							src={js}
							width={120}
							height={100}
							alt=""
						/>
						<h1 className={styles.title}>Aprende React</h1>
						<p className={styles.subtitle}>
							React es la libreria de frontend mas popular en la actualidad,
							aprendela y podras encontrar trabajo y estabilidad econmica
						</p>
					</div>
				</div>
				<div className={styles.image_section2}>
					<div className={styles.image_text_wrapper}>
						<Image
							className={styles.image}
							src={css}
							width={120}
							height={100}
							alt=""
						/>
						<h1 className={styles.title}>Aprende React</h1>
						<p className={styles.subtitle}>
							React es la libreria de frontend mas popular en la actualidad,
							aprendela y podras encontrar trabajo y estabilidad econmica
						</p>
					</div>
					<div
						className={styles.image_text_wrapper}
						style={{
							marginTop: "15%",
						}}
					>
						<Image
							className={styles.image}
							src={html5}
							width={120}
							height={100}
							alt=""
						/>
						<h1 className={styles.title}>Aprende React</h1>
						<p className={styles.subtitle}>
							React es la libreria de frontend mas popular en la actualidad,
							aprendela y podras encontrar trabajo y estabilidad econmica
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
