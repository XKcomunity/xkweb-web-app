"use client";
import styles from "../snippets/_snippetPage.module.scss";

export default function SnippetHeadingLinks() {
	return (
		<>
            <div className={styles.headings_links_container}>
                <button className={styles.snippetHeadingLinks}>Todos</button>
                <button className={styles.snippetHeadingLinks}>Web Design</button>
                <button className={styles.snippetHeadingLinks}>Lenguajes</button>
                <button className={styles.snippetHeadingLinks}>Frameworks</button>
            </div>
		</>
	);
}
