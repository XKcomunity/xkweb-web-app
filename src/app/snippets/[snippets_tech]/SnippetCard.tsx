import Image from "next/image";
import styles from "./snippet-tech.module.scss";
import Link from "next/link";
// import getSnippets from "lib/getSnippets";

type Props = {
	snippets_type: Snippet[];
};

export default function SnippetCard({ snippets_type }: Props) {
	// const dataSnippets: Promise<Snippet[]> = getSnippets();
	// const snippets = await dataSnippets;

	// const snippets_type = snippets.filter(
	// 	(item) => item.category === snippets_category
	// );
	return (
		<section className={styles.snippet_card_container}>
			{snippets_type.map((snippet) => (
				<article key={snippet.id} className={styles.snippet_card}>
					<Link href={`/snippets/${snippet.tech}/${snippet.id}`}>
						<div className={styles.snippet_card_heading}>
							<Image
								src={snippet.img}
								className={styles.snippet_card_img}
								alt=""
								width={50}
								height={50}
							/>
							<div className={styles.snippet_card_heading_text}>
								<h3>{snippet.title}</h3>
								<h5>{snippet.subTitle}</h5>
							</div>
						</div>
						<p className={styles.snippet_card_paragraph}>
							{snippet.description}
						</p>
					</Link>
				</article>
			))}
		</section>
	);
}
