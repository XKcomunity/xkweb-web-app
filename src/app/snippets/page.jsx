import styles from "../snippets/_snippetPage.module.scss";
import MainTitle_snipet from "./MainTitle_snippet";
import SnippetHeadingLinks from "./SnippetHeadingLinks";
import SnippetTechCard from "./snippetTechCard";

export default function Snippet() {
	return (
		<>
			<main className={styles.main_snippet}>
				<MainTitle_snipet />
				<SnippetHeadingLinks />
				<div className={styles.divider}></div>
				<div className={styles.tech_cards_wrapper}>
					<SnippetTechCard />
				</div>
			</main>
		</>
	);
}
