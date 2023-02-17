"use client";
import styles from "../snippets/_snippetPage.module.scss";
import MainTitle_snipet from "./MainTitle_snippet";
import SnippetHeadingLinks from "./SnippetHeadingLinks";


export default function Snippet() {
	return (
		<>
		   <main className={styles.main_snippet}>
				<MainTitle_snipet />
				<SnippetHeadingLinks />
				<div className={styles.divider}></div>
		   </main>
		</>
	);
}
