"use client";
import styles from "../snippets/_snippetPage.module.scss";

export default function SnippetHeadingLinks() {
	return (
		<>
            <ul className={styles.headings_snippets_links}>
                <li><a href="">Todos</a></li>
                <li><a href="">Web Design</a></li>
                <li><a href="">Lenguajes</a></li>
                <li><a href="">Frameworks</a></li>
            </ul>
		</>
	);
}
