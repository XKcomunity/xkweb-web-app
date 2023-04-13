"use client";

import styles from "./titles.module.scss";

type Props = {
	blogTitle: string;
};

export const BlogCategoryTitle = ({ blogTitle }: Props) => {
	return (
		<>
			<div className={styles.main_title_wrapper}>
				<h2 className={styles.blog_category_title}>{blogTitle}</h2>
			</div>
		</>
	);
};
