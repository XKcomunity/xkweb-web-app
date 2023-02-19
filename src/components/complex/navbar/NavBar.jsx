"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";

import logo from "../../../../public/logo/logo-vertical.png";

export const NavBar = () => {
	const width = window.visualViewport.width / 2;
	const [menuOpen, setMenuOpen] = useState(false);

	const toogleDrawer = () => {
		setMenuOpen((state) => !state);
	};

	return (
		<>
			<nav className={styles.navbar_wrapper}>
				<div className={styles.navbar_logo}>
					<Link href='/'>
						<h2>XK-Community</h2>
					</Link>
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

				{!menuOpen ? (
					<HiMenu
						size={45}
						color="white"
						className={styles.mobile_logo_image}
						onClick={toogleDrawer}
					/>
				) : (
					<HiX
						size={45}
						color="white"
						className={styles.mobile_logo_image}
						onClick={toogleDrawer}
					/>
				)}
			</nav>

			<Drawer
				open={menuOpen}
				onClose={toogleDrawer}
				direction="left"
				size={width}
				duration={400}
				style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
			>
				<div className={styles.drawer_logo_wrapper}>
					<Image src={logo} width={135} height={135} alt="mobile menu logo" />
				</div>
				<hr style={{ lineHeight: "5", color: "white" }} />
				<div className={styles.drawer_links}>
					<ul className={styles.list_links}>
						<li className={styles.link}>
							<Link href="#">Inicio</Link>
						</li>
						<li className={styles.link}>
							<Link href="#">Artículos</Link>
						</li>
						<li className={styles.link}>
							<Link href="#">Snippets</Link>
						</li>
						<li className={styles.link}>
							<Link href="#">Contacto</Link>
						</li>
					</ul>
				</div>
			</Drawer>
		</>
	);
};
