import styles from './author-info.module.scss';
import Image from 'next/image';
import { AuthorSotialNetwork } from './SotialNetwork';

type AuthorInfoProps = {
	data: Article;
}

export function AuthorInfo({data}: AuthorInfoProps){

  return(
			<section className={styles.author_wrapper}>
				<Image src={data.author.photo.url} alt={data.author.name} className='' width={110} height={100} />
				<div>
					<h2 className={styles.author_name}>{data.author.name}</h2>
					<p>{data.author.bio}</p>
					<AuthorSotialNetwork data={data} />
				</div>
			</section>
  );
}