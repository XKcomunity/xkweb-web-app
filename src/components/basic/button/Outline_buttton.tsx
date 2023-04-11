"use client";
import styles from "./button.module.scss";

const OutlineButton = ({buttonText}) => {
	const ShowMessage = () => {
		alert("Welcome to Xk Web School");
	};
	return (
		<>
			<button className={styles.outline_button} onClick={ShowMessage}>
			   {buttonText}
			</button>
		</>
	);
};

export default OutlineButton;