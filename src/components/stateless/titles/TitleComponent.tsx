import styles from "./titles.module.scss";

type Props = {
	title: string;
};

export const TitleComponent = ({ title }: Props) => {
	return (
		<>
			<h2 className={styles.title}>{title}</h2>
		</>
	);
};
