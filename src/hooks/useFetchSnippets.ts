import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Snippet } from "type";

export const useFetchSnippets = (url: string) => {
	const params = useParams();
	const [snippets, setSnippets] = useState<Snippet[]>([]);
	const [selectedTech, setSelectedTech] = useState<string>("");
	const [filteredSnippets, setFilteredSnippets] = useState<Snippet[]>([]);

	useEffect(() => {
		async function fetchSnippetCards() {
			const cardsResponse = await fetch(url, {
				cache: "no-store",
			});
			const cardsJson = await cardsResponse.json();
			const snippets_type: Snippet[] = cardsJson.filter(
				(item: Snippet) => item.tech === params?.snippets_tech
			);
			setSnippets(snippets_type);
			setFilteredSnippets(snippets_type);
		}

		fetchSnippetCards();
	}, [url, params?.snippets_tech]);

	return {
		snippets,
		selectedTech,
		filteredSnippets,
		setSelectedTech,
		setFilteredSnippets,
	};
};
