import { useState, useEffect } from "react";
import { getArticles } from "hygraph/articleFetching";
import { Article } from "type";

export const useFetchArticles = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

	useEffect(() => {
		async function fetchArticleCards() {
			const cardsResponse = await getArticles();
			const cardsJson = await cardsResponse;
			setArticles(cardsJson);
			setFilteredArticles(cardsJson);
		}

		fetchArticleCards();
	}, []);

	return {
		articles,
		selectedCategory,
		filteredArticles,
		setSelectedCategory,
		setFilteredArticles,
	};
};
