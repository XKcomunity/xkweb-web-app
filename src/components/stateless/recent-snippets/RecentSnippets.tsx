"use client";
import { RecentSnippetCard } from "./RecentSnippetCard";
import styles from "./recent_snippets.module.scss";

export const RecentSnippets = () => {
	return (
		<>
            <div className={styles.recent_nippets__wrapper}>
				<RecentSnippetCard />
				<RecentSnippetCard />
				<RecentSnippetCard />
            </div>
        </>
    );
};