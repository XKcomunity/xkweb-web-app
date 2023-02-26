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
								// style={{ width: "100%", height: "100%", objectFit: "cover" }}
								width={50}
								height={50}
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
