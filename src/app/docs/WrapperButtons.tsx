"use client";
import Button from "@/components/basic/button/Button";
import OutlineButton from "@/components/basic/button/Outline_buttton";
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
