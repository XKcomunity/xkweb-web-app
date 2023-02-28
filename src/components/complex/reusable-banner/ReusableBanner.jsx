"use client";
import styles from "./reusable-banner.module.scss";

export const ReusableBanner = () => {
	return (
		<>
            <main className={styles.reusable_banner_wrapper}>
                <h1 className={styles.reusable_banner_wrapper_text}>Hola aqui estamos en los detalles</h1>
            </main>
        </>
    );
};