// import Link from 'next/link';
import styles from './author-info.module.scss';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

type AuthorSotialNetwork = {
  sotial: SotialNetworks;
}

export function AuthorSotialNetwork({sotial}: AuthorSotialNetwork){
  return(
    <section className={styles.author_sotialnetworks}>
      	<FaLinkedin size={24}/>
        <FaTwitter size={24}/>
        <FaGithub size={24}/>
      {/* <Link href={data.author.linkedIn} target='_blank'>
				<FaLinkedin size={24}/>
			</Link>
      <Link href={data.author.twitter} target='_blank'>
				<FaTwitter size={24}/>
			</Link>
      <Link href={data.author.github} target='_blank'>
				<FaGithub size={24}/>
			</Link> */}
    </section>
  );
}


