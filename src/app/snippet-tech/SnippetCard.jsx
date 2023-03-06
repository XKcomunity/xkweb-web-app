// "use client";
import styles from "./snippet-tech.module.scss";
import Image from "next/image";
import reactPng from "../../../public/images/tech-logos/react.png";

async function fetchSnippetCards() {
	const cardsResponse = await fetch("http://localhost:3001/snippets", {
		cache: "no-store",
	});

	return cardsResponse.json();
}

export default async function SnippetCard() {
	const snippets = await fetchSnippetCards();

	return (
		<>
			<section className={styles.snippet_card_container}>
				{snippets.map((snippet) => (
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
				{/* <article className={styles.snippet_card}>
					<div className={styles.snippet_card_heading}>
						<Image
							src={reactPng}
							className={styles.snippet_card_img}
							alt=""
						></Image>
						<div className={styles.snippet_card_heading_text}>
							<h3>esto es lo que</h3>
							<h5>tecnologia</h5>
						</div>
					</div>
					<p className={styles.snippet_card_paragraph}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
						magni quam asperiores quisquam itaque similique quo ut minima sed
						beatae, consectetur reprehenderit, tempora assumenda iusto eaque
						nesciunt. Voluptatum, quidem impedit?
					</p>
				</article> */}
			</section>
		</>
	);
}
