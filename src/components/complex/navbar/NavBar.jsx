"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";

import logo from "../../../../public/logo/logo_3.png";
// import mobile_logo from "../../../../public/logo/logo_mobile.svg";
export const NavBar = () => {
	return (
		<>
			<nav className={styles.navbar_wrapper}>
				<div className={styles.navbar_logo}>
					<Image
						className={styles.logo_image}
						src={logo}
						alt=""
						width={170}
						height={110}
					/>
					{/* <Image
						className={styles.mobile_logo_image}
						src={mobile_logo}
						width={60}
						height={60}
						alt="mobile logo"
						onClick={() => alert("Abriendo el Drawer")}
					/> */}
					<HiMenu
						size={60}
						color="white"
						className={styles.mobile_logo_image}
						onClick={() => alert("Abriendo el Drawer")}
					/>
				</div>
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
