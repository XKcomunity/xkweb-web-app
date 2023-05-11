"use client";
import styles from "./snippet_chosen.module.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type LibraryCode = {
	title: string;
	code: string;
};

type Props = {
	description: string;
};

export default function SnippetArticle({ description }: Props) {
	const codeBlocks: LibraryCode[] = [];
	let text = description;

	// Encuentra todos los bloques de código
	const codeRegex = /```([\w\W]+?)```/g;
	let match = codeRegex.exec(description);
	while (match) {
		const code = match[1];
		const titleMatch = /title:(.*)/.exec(code);
		const title = titleMatch ? titleMatch[1].trim() : "Code";
		codeBlocks.push({ title, code });
		match = codeRegex.exec(description);
	}

	// Separa el texto en bloques de texto y los mezcla con los bloques de código
	const blocks: (LibraryCode | string)[] = [];
	const textRegex = /```([\w\W]+?)```/;
	let blockMatch: RegExpExecArray | null = textRegex.exec(text);
	while (blockMatch) {
		if (blockMatch.index > 0) {
			blocks.push(text.slice(0, blockMatch.index));
		}

		const codeBlockIndex = codeBlocks.findIndex(
			(block) => block.code === blockMatch[1]
		);
		if (codeBlockIndex >= 0) {
			blocks.push(codeBlocks[codeBlockIndex]);
			codeBlocks.splice(codeBlockIndex, 1);
		}

		text = text.slice(blockMatch.index + blockMatch[0].length);
		blockMatch = textRegex.exec(text);
	}

	if (text) {
		blocks.push(text);
	}
	blocks.push(...codeBlocks);

	// Renderiza los bloques de texto y los bloques de código en el orden correcto
	return (
		<section className={styles.snippet_article_content}>
			{blocks.map((block, index) =>
				typeof block === "string" ? (
					<p key={index} className={styles.article_text}>
						{block}
					</p>
				) : (
					<div key={index}>
						<h3>{block.title}</h3>
						<SyntaxHighlighter language="typescript" style={atomDark}>
							{block.code}
						</SyntaxHighlighter>
					</div>
				)
			)}
		</section>
	);
}
