import { BlogTitle } from "@/components/basic/titles/BlogTitle";
import SnippetArticle from "./SnippetArticle";
import SnippetAuthor from "./snippetAuthor";
import styles from "./snippet_chosen.module.scss";

export default function MainContainer() {
	return (
		<>
          <main className={styles.containerFluid}>
			<div className={styles.container}>
			 	<BlogTitle />
				<SnippetAuthor />
				<SnippetArticle />
			</div>
          </main>
		</>
	);
}
