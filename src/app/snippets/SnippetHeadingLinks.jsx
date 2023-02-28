import styles from "../snippets/_snippetPage.module.scss";

async function fetchCategories() {
	const categoriesResponse = await fetch(" http://localhost:3001/categories", {
		cache: "no-store",
	});

	return categoriesResponse.json();
}

export default async function SnippetHeadingLinks() {
	const categories = await fetchCategories();
	return (
		<>
			<div className={styles.headings_links_container}>
				<button className={styles.snippetHeadingLinks}>{categories[3]}</button>
				<button className={styles.snippetHeadingLinks}>{categories[2]}</button>
				<button className={styles.snippetHeadingLinks}>{categories[1]}</button>
				<button className={styles.snippetHeadingLinks}>{categories[0]}</button>
			</div>
		</>
	);
}
