'use client';
import { useFetchSnippets } from '@/hooks/useFetchSnippets';
import { useParams } from 'next/navigation';
import SnippetTechPils from './SnippetTechPils';
import SnippetCard from './SnippetCard';

type Props = {};

export default function SnippetsByTech() {
	const params = useParams();

	const {
		snippets,
		selectedTech,
		filteredSnippets,
		setSelectedTech,
		setFilteredSnippets,
	} = useFetchSnippets('http://localhost:3001/snippets');

	const snippetsType: Snippet[] = snippets.filter(
		(item) => item.tech === params?.snippets_tech
	);

	const handleSnippetsTopic = (topic: string): void => {
		setSelectedTech(topic);
		if (selectedTech !== null && topic === selectedTech) {
			setFilteredSnippets(snippetsType);
		} else {
			const filtered = snippetsType.filter(
				(item: Snippet) => item.topic === topic
			);
			setFilteredSnippets(filtered);
		}
	};

	return (
		<>
			<SnippetTechPils
				snippetCardList={snippets}
				handleTopicClick={handleSnippetsTopic}
			/>
			<SnippetCard snippetsType={filteredSnippets} />
		</>
	);
}
