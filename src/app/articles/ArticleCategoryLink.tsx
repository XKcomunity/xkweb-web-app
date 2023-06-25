import { Article } from "type";
import styles from "../snippets/_snippetPage.module.scss";

type Props = {
	articles: Article[];
	handleCategoryClick: Function;
};

export default function ArticleCategoryLink({
	articles,
	handleCategoryClick,
}: Props) {
	const uniqueCategories = [
		...new Set(articles.map((item: Article) => item.category.name)),
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
