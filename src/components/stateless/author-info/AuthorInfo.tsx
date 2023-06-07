import styles from './author-info.module.scss';
import Link from 'next/link';
import Image from 'next/image';

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
					<h2 className={styles.author_name}>Michael Linares Abreu</h2>
					<h4>fronted developer</h4>
					<div className="author_sotialnetworks">
						<Link href="https://www.google.com/" target='_blank'>
							Linkedin
						</Link>
						<Link href="https://www.google.com/" target='_blank'>
							twitter
						</Link>
						<Link href="https://www.google.com/" target='_blank'>
							github
						</Link>
					</div>
				</article>
			</section>
  );
}