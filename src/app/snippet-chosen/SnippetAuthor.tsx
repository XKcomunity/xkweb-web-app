import styles from "./snippet_chosen.module.scss";
import Link from "next/link";

export default function SnippetAuthor() {
	return (
		<>
        	<div className={styles.snippet_author}>
                <div className={styles.snippet_avatar}> M </div>
                <Link href="#">
                    <h4>Michael Linares</h4>
                </Link>
                <span>Date()</span>
            </div>
         </>
    );
}
