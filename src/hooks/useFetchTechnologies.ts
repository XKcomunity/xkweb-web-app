import { useState, useEffect } from 'react';
import { Tecnology } from 'type';

export const useFetchTechnologies = (url: string) => {
	const [technologies, setTechnologies] = useState<Tecnology[]>([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [filteredTechnologies, setFilteredTechnologies] = useState<Tecnology[]>(
		[]
	);


	useEffect(() => {
		async function fetchSnippetCards() {
			const cardsResponse = await fetch(url, {
				cache: 'no-store',
			});
			const cardsJson = await cardsResponse.json();
			setTechnologies(cardsJson);
			setFilteredTechnologies(cardsJson);
		}

		fetchSnippetCards();
	}, [url]);

	return {
		technologies,
		selectedCategory,
		filteredTechnologies,
		setSelectedCategory,
		setFilteredTechnologies,
	};
};
