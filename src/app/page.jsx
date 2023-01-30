"use client";
import styles from "./page.module.scss";
import Button from "@/components/basic/button/Button";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>The Xk Web Project</h1>
			<Button />
			<ul className={styles.cardwrapper}>
				<motion.li whileHover={{ scale: 1.1 }}>
					<li className={styles.card}>
						<img
							src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVuZ3VhamVzJTIwZGUlMjBwcm9ncmFtYWNpJUMzJUIzbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
						<h3>
							<a href="">Learn React.js</a>
						</h3>
						<p>The most popular frontend library</p>
					</li>
				</motion.li>
				<motion.li whileHover={{ scale: 1.1 }}>
					<li className={styles.card}>
						<img
							src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGVuZ3VhamVzJTIwZGUlMjBwcm9ncmFtYWNpJUMzJUIzbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
						<h3>
							<a href="">Try Vue.js!</a>
						</h3>
						<p>A high perfomance framework</p>
					</li>
				</motion.li>
				<motion.li whileHover={{ scale: 1.1 }}>
					<li className={styles.card}>
						<img
							src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGVuZ3VhamVzJTIwZGUlMjBwcm9ncmFtYWNpJUMzJUIzbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
						<h3>
							<a href="">Angular by storm</a>
						</h3>
						<p>The complete framework</p>
					</li>
				</motion.li>
			</ul>
		</main>
	);
}
