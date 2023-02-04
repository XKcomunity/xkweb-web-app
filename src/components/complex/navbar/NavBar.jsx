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
								<li className={styles.navbar_item}>Home</li>
							</Link>
						</motion.li>
						<motion.li
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="#">
								<li className={styles.navbar_item}>Blog</li>
							</Link>
						</motion.li>
						<motion.li
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="#">
								<li className={styles.navbar_item}>Cursos</li>
							</Link>
						</motion.li>
						<motion.li
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="#">
								<li className={styles.navbar_item}>About us</li>
							</Link>
						</motion.li>
						<motion.li
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="#">
								<li className={styles.navbar_item}>Login</li>
							</Link>
						</motion.li>
						<motion.li
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="#">
								<li className={styles.navbar_item}>Register</li>
							</Link>
						</motion.li>
					</ul>
				</div>
			</nav>
		</>
	);
};
