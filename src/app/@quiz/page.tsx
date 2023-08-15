import styles from "./quiz_section.module.scss";

export default function Quiz() {
	return (
		<section className={styles.quiz_section}>
			<h1 className={styles.question_quiz_heading}>
				Pregunta numero <span className={styles.question_number}>#1</span>
				<span>.</span>
			</h1>
			<p className={styles.score}>Score: 0</p>
			<section className={styles.quiz_subsection}>
				<h4 className={styles.quiz_subtitle}>What is the right channel?</h4>
				<div className={styles.buttons_choice_section}>
					<div className={styles.choice_subsection_1}>
						<button className={styles.button_for_select}>Alternative</button>
						<button className={styles.button_for_select}>Alternative</button>
					</div>
					<div className={styles.choice_subsection_2}>
						<button className={styles.button_for_select}>Alternative</button>
						<button className={styles.button_for_select}>Alternative</button>
					</div>
				</div>
				<button className={styles.button_next}>Next</button>
			</section>
		</section>
	);
}
