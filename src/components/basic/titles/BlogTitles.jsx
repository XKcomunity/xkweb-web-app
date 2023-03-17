"use client";

import styles from "./titles.module.scss";

export const BlogTitle = () => {
	return (
		<>
            <div className={styles.blogTitle_container}>
                <h1 className={styles.blogTitle}>Como centrar un div con css sin usar mediea queries</h1>
            </div>
		</>
	);
};
