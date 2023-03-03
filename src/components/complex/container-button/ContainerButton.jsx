"use client";
import Link from "next/link";
import styles from "./container_button.module.scss";

export default function ContainerButton({buttonText, route}) {


	return (
		<>
            <div className={styles.container_button}>
				<Link href={route}>
					<button className={styles.button}>
						{buttonText}
					</button>
				</Link>
            </div>
		</>
	);
}