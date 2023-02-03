import Image from "next/image";
import styles from "./home-banner.module.scss";
import bg from "../../../../public/images/bg.png";
import robot from "../../../../public/images/robot.png";
import space from "../../../../public/images/space.jpg";
export const HomeBanner = () => {
	return (
		<>
			<div className={styles.image_background}>

				<div className={styles.space_background}>

				</div>
				<div>
					<Image
						className={styles.responsive_image}
						src={robot}
						width={250}
						height={250}
						style={{
							position: "absolute",
							objectFit: "cover",

							top: 180,
							left: 350,
						}}
						alt="robot image"
					/>
				</div>
			</div>
		</>
	);
};
