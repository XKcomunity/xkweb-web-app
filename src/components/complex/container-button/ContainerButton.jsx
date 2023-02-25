"use client";
import styles from "./container_button.module.scss";

export default function ContainerButton({buttonText}) {

	return (
		<>
            <div className={styles.container_button}>
                <button className={styles.button}>
					{buttonText}
				</button>
            </div>
		</>
	);
}