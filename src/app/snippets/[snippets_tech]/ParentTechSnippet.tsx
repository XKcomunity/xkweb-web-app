"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import SnippetTechPils from "./SnippetTechPils";
import SnippetCard from "./SnippetCard";

type Props = {};

export default function ParentTechSnippet() {
	const params = useParams();

	const [snippetCardList, setSnippetCardList] = useState<Snippet[]>([]);
	const [selectedTopic, setSelectedTopic] = useState<string>("");
	const [filterTopics, setFilterTopics] = useState<Snippet[]>([]);

	useEffect(() => {
		async function fetchSnippetCards() {
			const cardsResponse = await fetch("http://localhost:3001/snippets", {
				cache: "no-store",
			});
			const cardsJson = await cardsResponse.json();

			const snippets_type: Snippet[] = cardsJson.filter(
				(item: Snippet) => item.tech === params?.snippets_tech
			);

			setSnippetCardList(snippets_type);
			setFilterTopics(snippets_type);
		}

		fetchSnippetCards();
	}, [params?.snippets_tech]);

	const snippets_type = snippetCardList.filter(
		(item) => item.tech === params?.snippets_tech
	);

	const handleTopicClick = (topic: string) => {
		setSelectedTopic(topic);
		if (topic === "") {
			setFilterTopics(snippets_type);
		} else {
			const filtered = snippets_type.filter(
				(item: Snippet) => item.topic === topic
			);
			setFilterTopics(filtered);
		}
	};
	return (
		<>
			<SnippetTechPils
				snippetCardList={snippetCardList}
				handleTopicClick={handleTopicClick}
			/>
			<SnippetCard snippets_type={filterTopics} />
		</>
	);
}
