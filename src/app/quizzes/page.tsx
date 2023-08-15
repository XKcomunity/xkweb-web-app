"use client";
import styles from "./quizzes.module.scss";
import { useQuiz } from "@/store/useQuiz";
import { quizType, selectQuizTheme, quizLevel } from "@/data";
import { SelectQuizParameters } from "@/components/statefull/select-quiz/SelectQuizParameters";

export default function Quizzes() {
	const defaultStateObject = useQuiz((state: any) => state.config);
	console.log(defaultStateObject);

	const addNumberOfQuestions = useQuiz(
		(state: any) => state.addNumberOfQuestions
	);
	const addCategory = useQuiz((state: any) => state.addCategory);
	const addLevel = useQuiz((state: any) => state.addLevel);
	const addType = useQuiz((state: any) => state.addType);
	const addStatus = useQuiz((state: any) => state.addStatus);

	return (
		<section className={styles.banner}>
			<div className={styles.title_container}>
				<h1 className={styles.quiz_title}>Quiz Test!!!</h1>
			</div>
			<section className={styles.questions_section}>
				<label htmlFor="" className={styles.label_text}>
					Numero de preguntas:
				</label>
				<input
					onChange={(e) => addNumberOfQuestions(e.target.value)}
					className={styles.input_number}
					type="number"
					defaultValue={10}
					max={50}
					min={0}
				/>
			</section>

			<section className={styles.select_quiz_container}>
				<SelectQuizParameters
					options={selectQuizTheme}
					subject="Category"
					functionState={addCategory}
				/>
				<SelectQuizParameters
					options={quizLevel}
					subject="Level"
					functionState={addLevel}
				/>
				<SelectQuizParameters
					options={quizType}
					subject="type"
					functionState={addType}
				/>
			</section>
			<div className={styles.button_quiz_container}>
				<button
					className={styles.button_quiz}
					onClick={() => addStatus("start")}
				>
					Start the Quiz
				</button>
			</div>
		</section>
	);
}
