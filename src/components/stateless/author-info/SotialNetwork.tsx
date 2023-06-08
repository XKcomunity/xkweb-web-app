import Link from 'next/link';
import styles from './author-info.module.scss';

type AuthorSotialNetwork = {
}

export function AuthorSotialNetwork(){
  return(
    <section className={styles.author_sotialnetworks}>
      <Link href="https://www.google.com/" target='_blank'>
        Linkedin
      </Link>
      <Link href="https://www.google.com/" target='_blank'>
        twitter
      </Link>
      <Link href="https://www.google.com/" target='_blank'>
        github
      </Link>
    </section>
  );
}


