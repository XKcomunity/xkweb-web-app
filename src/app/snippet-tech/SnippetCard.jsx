// "use client";
import styles from "./snippet-tech.module.scss";
import Image from "next/image";

async function fetchSnippetCards() {
	const cardsResponse = await fetch("http://localhost:3001/snippetCardList", {
		cache: "no-store",
	});

	return cardsResponse.json();
}

export default async function SnippetCard() {
	const snippetCardList = await fetchSnippetCards();

	return (
		<>
			<section className={styles.snippet_card_container}>
				{snippetCardList.map((snippet) => (
					<article key={snippet.id} className={styles.snippet_card}>
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
					</article>
				))}
			</section>
		</>
	);
}