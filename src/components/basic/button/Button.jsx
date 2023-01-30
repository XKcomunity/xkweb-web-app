"use client";
import styles from "./button.module.scss";

const Button = () => {
	const ShowMessage = () => {
		alert("Welcome to Xk Web School");
	};
	return (
		<>
			<button className={styles.button} onClick={ShowMessage}>
				Click me
			</button>
		</>
	);
};

export default Button;
