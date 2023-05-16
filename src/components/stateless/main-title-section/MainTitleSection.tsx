import styles from "./main-title-section.module.scss";

type Props = {
	title1: string;
	title2: string;
	description: string;
	subTitle: string;
};

const MainTitleSection = ({ title1, title2, description, subTitle }: Props) => {
	return (
		<main className={styles.main_snippet}>
			<h1 className={styles.h1}>
				{title1} <span className={styles.h1_span}>{title2}</span>
			</h1>
			<p className={styles.headings_snippets_text}>{description}</p>
			<h3 className={styles.h3}>{subTitle}</h3>
		</main>
	);
};

export default MainTitleSection;
