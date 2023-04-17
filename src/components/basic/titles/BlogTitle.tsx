"use client";

import styles from "./titles.module.scss";

type Props = {
	title: string;
};

export const BlogTitle = ({ title }: Props) => {
	return (
		<>
			<div className={styles.blogTitle_container}>
				<h1 className={styles.blogTitle}>{title}</h1>
			</div>
		</>
	);
};
