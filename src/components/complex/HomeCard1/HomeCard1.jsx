"use client";
import styles from "./home-card1.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export const HomeCard1 = ({ image, title, description, footer_content }) => {
	return (
		<>
			<motion.div whileHover={{ scale: 1.07 }}>
				<div className={styles.card_wrapper}>
					<div className={styles.image_wrapper}>
						<Image className={styles.card_image} src={image} alt="Vue Image" />
					</div>
					<div className={styles.card_content}>
						<div className={styles.content_wrapper}>
							<h1 className={styles.card_title}>{title}</h1>
							<p className={styles.card_description}>{description}</p>
						</div>
						<footer className={styles.footer_wrapper}>
							<p className={styles.footer}>{footer_content}</p>
						</footer>
					</div>
				</div>
			</motion.div>
		</>
	);
};
