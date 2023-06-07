import { AuthorInfo } from "../author-info/AuthorInfo";
import styles from "./banner-header-info.module.scss";

type Props = {
};

export const BannerHeaderInfo = () => {
	return (
		<>
			<section className={styles.banner_header_wrapper}>
        <AuthorInfo image={""} authorName={""} description={""} />
			</section>
		</>
	);
};