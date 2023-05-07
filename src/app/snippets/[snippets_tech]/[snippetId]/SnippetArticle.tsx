"use client";
import styles from "./snippet_chosen.module.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
	code: string;
	description: string;
};

export default function SnippetArticle({ description, code }: Props) {
	const code1 = "const x = 'Hello, world!'; console.log(x);";

	return (
		<>
			<section className={styles.snippet_article_content}>
				<br />
				<p className={styles.article_text}>{description}</p>
				<br />
				<p className={styles.article_text}>{description}</p>
				<SyntaxHighlighter language="javascript" style={atomDark}>
					{code1}
				</SyntaxHighlighter>
				<SyntaxHighlighter language="typescript" style={atomDark}>
					{code}
				</SyntaxHighlighter>
			</section>
		</>
	);
}
