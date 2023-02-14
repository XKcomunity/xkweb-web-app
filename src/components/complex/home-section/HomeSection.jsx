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
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Explicabo assumenda laudantium in pariatur adipisci cupiditate
							zvnjcxknvjkc vcxnvcvncx vxcjvxcvcx vjxcvjcxvjcx vjxvcxjvcxjv
							vjxcvjcxvjcxcxv vncjvnjcv
						</p>
					</div>
					<div className={styles.main_subtitle_text_wrapper}>
						<p className={styles.main_subtitle_text}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
							consequuntur, provident neque obcaecati error omnis? Unde ashbdshf
							sdfdhsfhsd sdfjsdjfjsd sdjfsdfbsd sdfhsdfhsdf sdhfsdhfhsdf
							fshfhsdhfhsdf sdhfsdhfhsd
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
						<h1 className={styles.title}>Aprende React</h1>
						<p className={styles.subtitle}>
							React es la libreria de frontend mas popular en la actualidad,
							aprendela y podras encontrar trabajo y estabilidad econmica
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
						<h1 className={styles.title}>Aprende React</h1>
						<p className={styles.subtitle}>
							React es la libreria de frontend mas popular en la actualidad,
							aprendela y podras encontrar trabajo y estabilidad econmica
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
						<h1 className={styles.title}>Aprende React</h1>
						<p className={styles.subtitle}>
							React es la libreria de frontend mas popular en la actualidad,
							aprendela y podras encontrar trabajo y estabilidad econmica
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
