import Image from "next/image";
import styles from "./snippet-tech.module.scss";
import Link from "next/link";

type Props = {
	snippets_type: Snippet[];
};

export default function SnippetCard({ snippets_type }: Props) {
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
