"use client";
import styles from "./button.module.scss";

const Button = () => {
	const ShowMessage = () => {
		alert("Welcome to Xk Web School");
	};
	return (
		<>
			<button className={styles.outline_button} onClick={ShowMessage}>
				Leer más
			</button>
		</>
	);
};

export default Button;
