import styles from "./titles.module.scss";

export const NormalTitle = ({ homeTitle }) => {
	return (
		<>
			<h2 className={styles.title}>{homeTitle}</h2>
		</>
	);
};
