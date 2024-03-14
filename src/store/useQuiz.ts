import { create } from "zustand";

export type configTypesState = {
	numberOfQuestions: number;
	category: string;
	level: string;
	type: string;
	status: string;
	score: number;
};

const defaultConfig = {
	numberOfQuestions: 10,
	category: { id: 0, name: "" },
	level: "",
	type: "",
	status: "",
	score: 0,
};

export const useQuiz = create((set) => ({
	config: { ...defaultConfig },

	addLevel: (level: string) =>
		set((state: any) => ({
			config: { ...state.config, level: level },
		})),

	addType: (type: string) =>
		set((state: any) => ({
			config: { ...state.config, type: type },
		})),

	addNumberOfQuestions: (count: number) =>
		set((state: any) => ({
			config: { ...state.config, numberOfQuestions: count },
		})),

	addCategory: (id: number, name: string) =>
		set((state: any) => ({
			config: { ...state.config, category: { id: id, name: name } },
		})),

	addStatus: (status: string) =>
		set((state: any) => ({
			config: { ...state.config, status: status },
		})),

	addScore: () =>
		set((state: any) => ({
			config: { ...state.config, score: state.config.score + 1 },
		})),
}));
