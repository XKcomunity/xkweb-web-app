import { AuthorInfo } from "../author-info/AuthorInfo";
import styles from "./banner-header-info.module.scss";

type Props = {
	data: Article;
};

export const BannerHeaderInfo = ({data}: Props) => {
	return (
		<>
			<section className={styles.banner_header_wrapper}>
        <div className={styles.banner_content}>
				<AuthorInfo data={data} />
        </div>
			</section>
		</>
	);
};