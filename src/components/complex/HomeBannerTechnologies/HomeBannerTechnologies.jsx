"use client";
import styles from "./home-banner-technologies.module.scss";
import Image from "next/image";

import banner from "../../../../public/images/utils/banner_photo.jpg";
// import vue from "../../../../public/images/tech-logos/vue.png";
// import css from "../../../../public/images/tech-logos/css.png";
// import js from "../../../../public/images/tech-logos/js.jpeg";
// import html from "../../../../public/images/tech-logos/html.png";
// import react from "../../../../public/images/tech-logos/vue.png";

export const HomeBannerTechnologies = () => {
	return (
		<>
			<div className={styles.banner_wrapper}>
				<div className={styles.image_banner_wrapper}>
					<Image
						src={banner}
						className={styles.image}
						// style={{
						// 	width: "100%",
						// 	height: "100%",
						// 	objectFit: "cover",
						// 	borderRadius: "10px",
						// }}
						alt="banner image"
					/>
				</div>
				{/* <div className={styles.images_wrapper}>
					<div className={styles.image_container}>
						<div className={styles.vue_image_wrapper}>
							<Image
								src={vue}
								className={styles.vue_image}
								width={65}
								height={65}
								alt="vue image"
							/>
						</div>
						<div className={styles.html5_image_wrapper}>
							<Image
								src={html}
								className={styles.html5_image}
								width={65}
								height={65}
								alt="html5 image"
							/>
						</div>
						<div className={styles.js_image_wrapper}>
							<Image
								src={js}
								className={styles.js_image}
								width={80}
								height={80}
								alt="js image"
							/>
						</div>
					</div>
				</div> */}
				<div className={styles.banner_text}>
					<span className={styles.title}>Web Design</span>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A
						accusantium commodi, rem omnis reprehenderit non explicabo odit,
						dolorem eveniet architecto voluptate, nihil facere reiciendis optio
						corporis officia eius? Perspiciatis, enim. Quisquam debitis
						reprehenderit, nesciunt consectetur soluta ipsam dolore. Porro
						possimus quos modi iure. Quasi soluta aliquam iusto dolorem totam.
						Fuga dolorem nemo autem sapiente nisi ratione quod eius aperiam
						quasi.
					</p>
				</div>
			</div>
		</>
	);
};
