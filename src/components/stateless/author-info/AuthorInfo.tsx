import styles from './author-info.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

type AuthorInfoProps = {
	data:Article
}

export function AuthorInfo({data}: AuthorInfoProps){

	console.log(typeof data.author.description);
	
  return(
			<section className={styles.author_wrapper}>
				<Image src={data.author.photo.url} alt={""} className='' width={110} height={100} />
				<article>
					<h2 className={styles.author_name}>{data.author.name}</h2>
					<h4>{data.author.description}</h4>
					<div className="author_sotialnetworks">
						<Link href={data.author.linkedIn} target='_blank'>
							<FaLinkedin size={24}/>
						</Link>
						<Link href={data.author.twitter} target='_blank'>
							<FaTwitter size={24}/>
						</Link>
						<Link href={data.author.github} target='_blank'>
							<FaGithub size={24}/>
						</Link>
					</div>
				</article>
			</section>
  );
}