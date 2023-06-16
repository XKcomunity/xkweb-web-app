import styles from './author-info.module.scss';
import Image from 'next/image';
import { AuthorSotialNetwork } from './SotialNetwork';

type AuthorInfoProps = {
	photo: string;
  name: string;
	bio: string;
}

export function AuthorInfo({name, photo, bio}: AuthorInfoProps){
  return(
			<section className={styles.author_wrapper}>
				<Image src={photo} alt={name} width={110} height={100} />
				<div>
					<h2 className={styles.author_name}>{ name }</h2>
					<h4>{ bio }</h4>
					<AuthorSotialNetwork />
				</div>
			</section>
  );
}