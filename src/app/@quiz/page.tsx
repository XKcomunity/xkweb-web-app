"use client";
import { useEffect, useState } from "react";
import { useQuiz } from "@/store/useQuiz";
import styles from "./quiz_section.module.scss";

export default function Quiz() {
	const [questions, setQuestions] = useState<any>([]);
	const [answer, setAnswer] = useState("");
	const [loading, setLoading] = useState<boolean>(false);

	const config = useQuiz((state: any) => state.config);
	const addScore = useQuiz((state: any) => state.addScore);

	useEffect(() => {
		async function getQuestions() {
			setLoading(true);
			const { results } = await (
				await fetch(
					`https://opentdb.com/api.php?amount=${config.numberOfQuestions}&category=${config.category.id}&difficulty=${config.level}&type=${config.type}`
				)
			).json();

			const variedResults = results.map((e: any) => {
				let value = [...e.incorrect_answers, e.correct_answer]
					.map((value) => ({
						value,
						sort: Math.random(),
					}))
					.sort((a, b) => a.sort - b.sort)
					.map(({ value }) => value);
				e.answers = [...value];
				return e;
			});

			console.log(variedResults);
			setQuestions([...variedResults]);
			setLoading(false);
		}

		getQuestions();
	}, [config.numberOfQuestions, config.category.id, config.level, config.type]);

	const handleNext = () => {
		let remainingQuestions = [...questions];
		remainingQuestions.shift();
		setQuestions([...remainingQuestions]);
		setAnswer("");
	};

	const checkAnswer = (answer: string) => {
		if (answer === questions[0].correct_answer) {
			addScore(0);
		}
		setAnswer(questions[0].correct_answer);
	};

	return (
		<section className={styles.quiz_section}>
			{questions.length ? (
				<h1 className={styles.question_quiz_heading}>
					Pregunta numero
					{questions?.length ? (
						<span className={styles.question_number}>
							#{config.numberOfQuestions - questions?.length + 1}
						</span>
					) : null}
					<span>.</span>
				</h1>
			) : null}

			<p className={styles.score}>Your Score: {config.score}</p>

			<section className={styles.quiz_subsection}>
				<h4 className={styles.quiz_subtitle}>
					{questions.length ? questions[0].question : null}
				</h4>

				{loading ? (
					<div className={styles.loading}>Loading content...</div>
				) : null}

				<div className={styles.buttons_choice_section}>
					{questions.length
						? questions[0].answers.map((answer: any) => (
								<button
									className={styles.button_for_select}
									key={answer}
									onClick={() => checkAnswer(answer)}
								>
									{answer}
								</button>
						  ))
						: null}
				</div>

				{questions.length ? (
					<button className={styles.button_next} onClick={() => handleNext()}>
						Next
					</button>
				) : null}

				{!loading && !questions.length && (
					<button
						className={styles.button_next}
						onClick={() => window.location.reload()}
					>
						Try new quiz
					</button>
				)}
			</section>
		</section>
	);
}
