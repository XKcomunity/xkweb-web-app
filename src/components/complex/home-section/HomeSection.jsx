"use client";

import styles from "./home_section.module.scss";
import Image from "next/image";

import vue from "../../../../public/images/tech-logos/vue.png";
import js from "../../../../public/images/tech-logos/js.jpeg";
import css from "../../../../public/images/tech-logos/css.png";
import html5 from "../../../../public/images/tech-logos/html.png";

export const HomeSection = () => {
	return (
		<>
			<div className={styles.grid_container}>
				<div className={styles.text_section}>
					<div className={styles.main_title_text_wrapper}>
						<p className={styles.main_text}>
						Somos mucho más que una plataforma para compartir snippet de código, somos la oportunidad para mejorar tus habilidades y ser parte de una comunidad apasionada que comparte tu interés por la programación.
						</p>
					</div>
					<div className={styles.main_subtitle_text_wrapper}>
						<p className={styles.main_subtitle_text}>
						Xk-Community es de código abierto, lo que significa que tú también puedes contribuir al desarrollo de la plataforma y  ser parte de esta comunidad tan apasionada.

						</p>
					</div>
				</div>
				<div className={styles.image_section1}>
					<div className={styles.image_text_wrapper1}>
						<Image
							className={styles.image}
							src={vue}
							width={110}
							height={100}
							alt=""
						/>
						<h1 className={styles.title}>Quiz</h1>
						<p className={styles.subtitle}>
						   Te ayudarán a poner en practica tus habilidades y confirmar lo que vas aprendiendo.
						</p>
					</div>
					<div className={styles.image_text_wrapper2}>
						<Image
							className={styles.image}
							src={js}
							width={110}
							height={100}
							alt=""
						/>
						<h1 className={styles.title}>Snippets</h1>
						<p className={styles.subtitle}>
						    Te proporcionamos un conjunto de recursos que podrás utilizar en tus propios proyectos.
						</p>
					</div>
				</div>
				<div className={styles.image_section2}>
					<div className={styles.image_text_wrapper3}>
						<Image
							className={styles.image}
							src={css}
							width={110}
							height={100}
							alt=""
						/>
						<h1 className={styles.title}>Articulos</h1>
						<p className={styles.subtitle}>
						   Te mantendrán actualizado sobre las últimas tendencias y herramientas de diseńo y desarrollo web.
						</p>
					</div>
					<div className={styles.image_text_wrapper4}>
						<Image
							className={styles.image}
							src={html5}
							width={110}
							height={100}
							alt=""
						/>
						<h1 className={styles.title}>Documentación</h1>
						<p className={styles.subtitle}>
							Te brindamos links a documentación, libros y articulos para que aprendas de fuentes confiables.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
