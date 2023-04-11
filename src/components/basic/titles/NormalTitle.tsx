import styles from "./titles.module.scss";

export const NormalTitle = (props) => {
	return (
		<>
			<h2 className={styles.title}>{props.title}</h2>
		</>
	);
};
