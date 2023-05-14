import styles from "./titles.module.scss";

type Props = {
	title: string;
};

export const NormalTitle = ({ title }: Props) => {
	return (
		<>
			<h2 className={styles.title}>{title}</h2>
		</>
	);
};
