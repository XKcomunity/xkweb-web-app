"use client";
import styles from "./docs.module.scss";
import BookCard from "./BookCard";

export default function DocsContainer() {
	return (
		<>
            <main className={styles.main}>
                <div className={styles.bookCardContent}>
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </main>
		</>
	);
}
