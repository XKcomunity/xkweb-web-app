"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import { HiMenu } from "react-icons/hi";

export const NavBar = () => {
	return (
		<>
			<nav className={styles.navbar_wrapper}>
				<div className={styles.navbar_logo}>
				    <h2>XK-Comunity</h2>
				</div>
				<div className={styles.navbar_pages}>
					<ul className={styles.navbar_list}>
						<motion.li
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="/">
								<li className={styles.navbar_item}>
								   <a>Inicio</a>
								</li>
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
							<Link href="/snippets">
								<li className={styles.navbar_item}>Snippets</li>
							</Link>
						</motion.li>
						<motion.li
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="">
								<li className={styles.navbar_item}>Contacto</li>
							</Link>
						</motion.li>
					</ul>
				</div>
				<HiMenu
						size={45}
						color="white"
						className={styles.mobile_logo_image}
						onClick={() => alert("Abriendo el Drawer")}
					/>
			</nav>
		</>
	);
};
