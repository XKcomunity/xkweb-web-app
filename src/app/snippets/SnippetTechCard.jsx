"use client";
import styles from "../snippets/_snippetPage.module.scss";

export default function SnippetTechCard() {
	return (
		<>
            <div className={styles.techcard_container}>
                <div className={styles.tech_card}>
                    <div className={styles.tech_card_img_content}></div>
                    <div className={styles.tech_card_title_content}>
                        <h4 className={styles.tech_card_title}>javascript</h4>
                    </div>
                </div>
            </div>
		</>
	);
}
