import styles from './author-info.module.scss';
import Image from 'next/image';
import { AuthorSotialNetwork } from './SotialNetwork';

type AuthorInfoProps = {
	image: string;
  authorName: string;
	description: string;
}

export function AuthorInfo({authorName, description, image}: AuthorInfoProps){
  return(
			<section className={styles.author_wrapper}>
				<Image src={image} alt={""} className='' width={110} height={100} />
				<article>
					<h2 className={styles.author_name}>{ authorName }</h2>
					<h4>fronted developer</h4>
					<AuthorSotialNetwork />
				</article>
			</section>
  );
}