import styles from "./secondary_title.module.scss";

export const SecondaryTitle = ({ secondary_title }) => {
	return (
		<>
			<h1 className={styles.secondary_title}>{secondary_title}</h1>
		</>
	);
};
