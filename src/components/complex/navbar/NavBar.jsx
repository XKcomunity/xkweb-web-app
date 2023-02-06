"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { motion } from "framer-motion";
export const NavBar = () => {
	return (
		<>
			<nav className={styles.navbar_wrapper}>
				<div className={styles.navbar_logo}>Xk Web</div>
				<div className={styles.navbar_pages}>
					<ul className={styles.navbar_list}>
						<motion.li
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="#">
								<li className={styles.navbar_item}>Inicio</li>
							</Link>
						</motion.li>
						<motion.li
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="#">
								<li className={styles.navbar_item}>Quienes Somos</li>
							</Link>
						</motion.li>
						<motion.li
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="#">
								<li className={styles.navbar_item}>Articulos</li>
							</Link>
						</motion.li>
						<motion.li
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="#">
								<li className={styles.navbar_item}>Contacto</li>
							</Link>
						</motion.li>
					</ul>
				</div>
			</nav>
		</>
	);
};
