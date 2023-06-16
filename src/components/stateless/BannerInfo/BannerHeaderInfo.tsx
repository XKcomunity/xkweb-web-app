import { AuthorInfo } from "../author-info/AuthorInfo";
import styles from "./banner-header-info.module.scss";

type Props = {
	name: string,
	photo: string,
	bio: string
};

export const BannerHeaderInfo = ({name, photo, bio }: Props) => {
	return (
		<>
			<section className={styles.banner_header_wrapper}>
        <div className={styles.banner_content}>
          <AuthorInfo photo={photo} name={name} bio={bio} />
        </div>
			</section>
		</>
	);
};