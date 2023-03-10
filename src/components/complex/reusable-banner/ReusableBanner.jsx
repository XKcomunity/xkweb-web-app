import { NormalTitle } from "@/components/basic/titles/NormalTitle";
import styles from "./reusable-banner.module.scss";

export const ReusableBanner = (props) => {
	return (
		<>
            <main className={styles.reusable_banner_wrapper}>
                <NormalTitle title={props.title} />
            </main>
        </>
    );
};