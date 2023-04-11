"use client";
import styles from "./button.module.scss";

const Button = ({buttonText}) => {
	const ShowMessage = () => {
		alert("Welcome to Xk Web School");
	};
	return (
		<>
			<button className={styles.button} onClick={ShowMessage}>
			   {buttonText}
			</button>
		</>
	);
};

export default Button;
