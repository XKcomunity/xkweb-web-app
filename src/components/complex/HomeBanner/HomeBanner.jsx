"use client";
import Image from "next/image";
import styles from "./home-banner.module.scss";
import robot from "../../../../public/images/robots/robot.png";
import { motion } from "framer-motion";

export const HomeBanner = () => {
	return (
		<>
			<div className={styles.image_background}>
				<div className={styles.space_background}></div>
				<motion.div
					whileInView={{ translateY: [-20, 20] }}
					transition={{
						delayChildren: 0.5,
						duration: 2,
						repeat: Infinity,
						repeatType: "reverse",
					}}
				>
					<div>
						<Image
							className={styles.responsive_image}
							src={robot}
							width={250}
							height={250}
							alt="robot image"
						/>
					</div>
				</motion.div>
			</div>
		</>
	);
};
