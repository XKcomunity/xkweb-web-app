import { create } from "zustand";

export type configTypesState = {
	numberOfQuestions: number;
	category: string;
	level: string;
	type: string;
	status: string;
	score: number;
	// addLevel: (level: string) => void;
	// addType: (type: string) => void;
	// addNumberOfQuestinos: (count: number) => void;
	// addCategory: (category: string) => void;
	// addStatus: (status: string) => void;
	// addScore: (score: number) => void;
};

const defaultConfig = {
	numberOfQuestions: 10,
	category: "",
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

	addCategory: (category: string) =>
		set((state: any) => ({
			config: { ...state.config, category: category },
		})),

	addStatus: (status: string) =>
		set((state: any) => ({
			config: { ...state.config, status: status },
		})),

	addScore: (score: number) =>
		set((state: any) => ({
			config: { ...state.config, score: score },
		})),
}));
