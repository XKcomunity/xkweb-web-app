"use client";
import Button from "@/components/stateless/buttons/Button";
import OutlineButton from "@/components/stateless/buttons/OutlineButtton";
import styles from "./docs.module.scss";

export default function Docs() {
	return (
		<>
			<div className={styles.button_wrapper}>
				<Button buttonText="poner texto" />
				<OutlineButton buttonText="mas info" />
			</div>
		</>
	);
}
