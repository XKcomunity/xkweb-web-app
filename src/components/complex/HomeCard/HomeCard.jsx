"use client";
import styles from "./home-card.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export const HomeCard = ({ urlImage }) => {
	return (
		<>
			<div className={styles.card}>
				<Image className={styles.image} src={urlImage} alt="" />
				<h1>
					<a href="">Learn React.js</a>
				</h1>
				<p>The most popular frontend library</p>
				<footer>
					<p>Nivel: Intermedio</p>
				</footer>
			</div>
		</>
	);
};
