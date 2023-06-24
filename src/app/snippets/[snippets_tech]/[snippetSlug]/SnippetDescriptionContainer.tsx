import { BlogTitle } from "@/components/stateless/titles/BlogTitle";
import SnippetArticle from "./SnippetArticle";
import SnippetAuthor from "./SnippetAuthor";
import styles from "./snippet_chosen.module.scss";

type Props = {
	snippet: Snippet;
};

export default function SnippetDescriptionContainer({ snippet }: Props) {
	return (
		<>
			<main className={styles.containerFluid}>
				<div className={styles.container}>
					<BlogTitle title={snippet.title} />
					<SnippetAuthor author={snippet.author} date={snippet.date} />
					<SnippetArticle
						description={snippet.description}
						// code={{
						// 	title: "",
						// 	code: "",
						// }}
					/>
				</div>
			</main>
		</>
	);
}
