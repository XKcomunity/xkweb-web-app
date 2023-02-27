// "use client";
import Image from "next/image";
import styles from "../snippets/_snippetPage.module.scss";

async function fetchTechnologies() {
	const tecnologiesResponse = await fetch(
		"http://localhost:3001/technologies",
		{
			cache: "no-store",
		}
	);

	return tecnologiesResponse.json();
}

export default async function SnippetTechCard() {
	const technology = await fetchTechnologies();
	return (
		<>
			{technology.map((tecno) => (
				<div key={tecno.id} className={styles.techcard_container}>
					<div className={styles.tech_card}>
						<div className={styles.tech_card_img_content}>
							<Image
								src={tecno.img}
								alt=""
								width={40}
								height={40}
								className={styles.tech_card_img}
							/>
						</div>
						<div className={styles.tech_card_title_content}>
							<h4 className={styles.tech_card_title}>{tecno.title}</h4>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
