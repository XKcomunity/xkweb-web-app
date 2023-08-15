import styles from "./select_quiz.module.scss";

type SelectProps = {
	subject: string;
	options: string[];
	functionState: (e: string) => void;
};

export const SelectQuizParameters = ({
	subject,
	options,
	functionState,
}: SelectProps) => {
	function handleQuizParameter(e: any) {
		functionState(e.target.value);
	}

	return (
		<>
			<select
				name=""
				id=""
				className={styles.selectComponent}
				onChange={(e) => handleQuizParameter(e)}
			>
				<option value="">{subject}</option>
				{options.map((option, index) => (
					<option
						value={option}
						key={index}
						// onChange={(e) => handleQuizParameter(e)}
					>
						{option}
					</option>
				))}
			</select>
		</>
	);
};
