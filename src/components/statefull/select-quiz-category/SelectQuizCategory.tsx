import { ChangeEvent } from "react";
import styles from "../select-quiz/select_quiz.module.scss";
import { Category } from "type";
import { useQuiz } from "@/store/useQuiz";

type SelectProps = {
	subject: string;
	options: Category[];
};

export const SelectQuizCategory = ({ subject, options }: SelectProps) => {
	const addCategory = useQuiz((state: any) => state.addCategory);

	return (
		<>
			<select
				className={styles.selectComponent}
				onChange={(e) => addCategory(e.target.selectedIndex, e.target.value)}
			>
				<option value="">{subject}</option>
				{options.map((option: Category) => (
					<option value={option.name} key={option.id}>
						{option.name}
					</option>
				))}
			</select>
		</>
	);
};
