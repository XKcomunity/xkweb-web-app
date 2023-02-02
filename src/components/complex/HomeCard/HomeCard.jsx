"use client";
import styles from "./home-card.module.scss";
import { motion } from "framer-motion";

export const HomeCard = ({ urlImage }) => {
	return (
		<>
			<motion.div whileHover={{ scale: 1.1 }}>
				<div className={styles.card}>
					<img src={urlImage} alt="" />
					<h3>
						<a href="">Learn React.js</a>
					</h3>
					<p>The most popular frontend library</p>
				</div>
			</motion.div>
		</>
	);
};
