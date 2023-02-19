"use client";
import styles from "../snippets/_snippetPage.module.scss";

export default function MainTitle_snipet() {
	return (
		<>
		   <main className={styles.main_snippet}>
				<h1 className={styles.h1}>Explora Por <span className={styles.h1_span}>Temas</span></h1>
				<p className={styles.headings_snippets_text}>Esta sección está organizada por temas, al seleccionar uno en particular, podrás explorar una gran cantidad de snippets de código relacionados con ese tema en específico.
				</p>
				<h3 className={styles.h3}> ¡Imagina todo lo que puedes aprender y descubrir en esta sección!</h3>
		   </main>
		</>
	);
}
