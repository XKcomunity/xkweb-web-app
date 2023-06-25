import { Snippet } from "type";
import styles from "./_snippetPage.module.scss";

type Props = {
	technologies: Snippet[];
	handleCategoryClick: Function;
};

export default function SnippetCategoryLinks({
	technologies,
	handleCategoryClick,
}: Props) {
	const uniqueCategories = [
		...new Set(technologies.map((item: Snippet) => item.category)),
	];

	console.log(uniqueCategories);
	return (
		<>
			<div className={styles.headings_links_container}>
				<button
					className={styles.snippetHeadingLinks}
					onClick={() => handleCategoryClick("")}
				>
					Todas
				</button>
				{uniqueCategories.map((category: string, index) => (
					<button
						className={styles.snippetHeadingLinks}
						key={index}
						onClick={() => handleCategoryClick(category)}
					>
						{category}
					</button>
				))}
			</div>
		</>
	);
}
