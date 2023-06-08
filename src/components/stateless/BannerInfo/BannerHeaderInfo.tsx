import { AuthorInfo } from "../author-info/AuthorInfo";
import styles from "./banner-header-info.module.scss";

type Props = {
	authorName: string,
	image: string,
	description: string
};

export const BannerHeaderInfo = ({authorName, image, description }: Props) => {
	return (
		<>
			<section className={styles.banner_header_wrapper}>
        <div className={styles.banner_content}>
          <AuthorInfo image={""} authorName={authorName} description={""} />
        </div>
			</section>
		</>
	);
};