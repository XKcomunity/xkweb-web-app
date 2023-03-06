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

export default async function SnippetHeadingLinks() {
	const tecnology = await fetchTechnologies();

	const categories = tecnology.filter(
		(tecno, index) =>
			tecnology.findIndex((item) => item.category === tecno.category) === index
	);

	// console.log(categories);

	return (
		<>
			<div className={styles.headings_links_container}>
				<button className={styles.snippetHeadingLinks}>Todos</button>
				{categories.map((tecnoItem) => (
					<button className={styles.snippetHeadingLinks} key={tecnoItem.id}>
						{tecnoItem.category}
					</button>
				))}
				{/* <button className={styles.snippetHeadingLinks}>{categories[3]}</button>
				<button className={styles.snippetHeadingLinks}>{categories[2]}</button>
				<button className={styles.snippetHeadingLinks}>{categories[1]}</button>
				<button className={styles.snippetHeadingLinks}>{categories[0]}</button> */}
			</div>{" "}
		</>
	);
}

