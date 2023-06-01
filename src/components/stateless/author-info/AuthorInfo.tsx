import styles from '../../../app/snippets/[snippets_tech]/[snippetId]/snippet_chosen.module.scss'
import Link from 'next/link';

type AuthorInfoProps = {
  authorName: string;
  date:string;
}


export function AuthorInfo({authorName, date}: AuthorInfoProps){
  return(
    <div className={styles.snippet_author}>
				<div className={styles.snippet_avatar}> {authorName.charAt(0)} </div>
				<Link href="#">
					<h4>{authorName}</h4>
				</Link>
				<span>{date}</span>
			</div>
  );
}