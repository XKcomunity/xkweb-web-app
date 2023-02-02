import Image from "next/image";
import styles from "./home-banner.module.scss";
import bg from "../../../../public/images/bg.png";
import robot from "../../../../public/images/robot.png";
import space from "../../../../public/images/space.jpg";
export const HomeBanner = () => {
	return (
		<>
			<div className={styles.image_background}>
				<Image
					src={bg}
					style={{
						objectFit: "cover",
						maxWidth: "100%",
						height: "90%",
					}}
					alt="bg image"
				/>
				<div>
					<Image
						src={space}
						style={{
							position: "absolute",
							objectFit: "cover",
							maxWidth: "100%",
							height: "90%",
							zIndex: -1,
							top: 0,
						}}
						alt="space image"
					/>
				</div>
				<div>
					<Image
						className={styles.responsive_image}
						src={robot}
						style={{
							position: "absolute",
							objectFit: "cover",
							width: "250px",
							height: "250px",
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
