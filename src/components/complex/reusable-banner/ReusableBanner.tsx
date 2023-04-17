import { NormalTitle } from "@/components/basic/titles/NormalTitle";
import styles from "./reusable-banner.module.scss";

type Props = {
	title: string;
};

export const ReusableBanner = ({ title }: Props) => {
	return (
		<>
			<main className={styles.reusable_banner_wrapper}>
				<NormalTitle title={title} />
			</main>
		</>
	);
};
