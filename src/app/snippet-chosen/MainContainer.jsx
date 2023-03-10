import SnippetArticle from "./SnippetArticle";
import SnippetAuthor from "./snippetAuthor";
import styles from "./snippet_chosen.module.scss";

export default function MainContainer() {
	return (
		<>
          <main className={styles.containerFluid}>
			<div className={styles.container}>
				<SnippetAuthor />
				<SnippetArticle />
			</div>
          </main>
		</>
	);
}
