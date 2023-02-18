"use client";
import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import logo from "../../../../public/logo/logo-x.png";

export function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.footer_wrapper}>
					<div className={styles.footer_section_1}>
						<div className={styles.footer_logo}>
							<Image src={logo} width={90} height={90} alt="" />
							<span className={styles.logo_text}>XK Community</span>
						</div>
						<div className={styles.footer_description}>
							As the ultimate resource for Vue.js developers, Vue Mastery produces
							weekly lessons so you can learn what you need to succeed as a Vue.js
							Developer
						</div>
						<div className={styles.footer_social_media}>
							<div className={styles.social_icons_wrapper}>
								<motion.div whileHover={{ scale: 1.1 }}>
									<div>
										<FaInstagram color="white" size={35} />
									</div>
								</motion.div>
								<motion.div whileHover={{ scale: 1.1 }}>
									<div>
										<FaDiscord color="white" size={35} />
									</div>
								</motion.div>
								<motion.div whileHover={{ scale: 1.1 }}>
									<div>
										<FaYoutube color="white" size={35} />
									</div>
								</motion.div>
							</div>
						</div>
					</div>
					<div className={styles.footer_section_2}>
						<div className={styles.links_heading}>
							<span className={styles.heading}>Enlaces</span>
						</div>
						<div className={styles.footer_links}>
							<Link href="/" className={styles.link}>
								<li className={styles.navbar_item}><a>Inicio</a></li>
							</Link>
							<Link href="#" className={styles.link}>
								<li className={styles.navbar_item}><a>Articulos</a></li>
							</Link>
							<Link href="/snippets" className={styles.link}>
								<li className={styles.navbar_item}><a>Snippets</a></li>
							</Link>
							<Link href="#" className={styles.link}>
								<li className={styles.navbar_item}><a>Contacto</a></li>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

