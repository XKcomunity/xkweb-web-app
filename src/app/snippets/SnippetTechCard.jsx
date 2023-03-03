// "use client";
import Image from "next/image";
import styles from "../snippets/_snippetPage.module.scss";

async function fetchTechnologies() {
	const technologiesResponse = await fetch(
		"http://localhost:3001/technologies",
		{
			cache: "no-store",
		}
	);

	const technologies = technologiesResponse.json();
	return technologies;
}

export default async function SnippetTechCard() {

	const technologyCards = await fetchTechnologies();

	return (
		<>
			{technologyCards.map((tech) => (
				<div key={tech.id} className={styles.techcard_container}>
					<div className={styles.tech_card}>
						<div className={styles.tech_card_img_content}>
							<Image
								src={tech.img}
								alt=""
								width={40}
								height={40}
								className={styles.tech_card_img}
							/>
						</div>
						<div className={styles.tech_card_title_content}>
							<h4 className={styles.tech_card_title}>{tech.title}</h4>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
