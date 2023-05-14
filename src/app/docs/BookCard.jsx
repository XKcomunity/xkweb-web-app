
"use client";
import styles from "./docs.module.scss";
import Image from "next/image";
import mike from "../../../public/images/bg/planets.jpg"

export default function BookCard() {
    const ShowMessage = () => {
		alert("Welcome to Xk Web School");
	};
	return (
		<>
            <div className={styles.bookCard}>
                <Image alt="" src={mike} className={styles.bookCardImg} />
                <span className={styles.bookCardCaption}>Clean Code</span>
                <button className={styles.downloadBtn} onClick={ShowMessage}>Descargar</button>
            </div>
		</>
	);
}