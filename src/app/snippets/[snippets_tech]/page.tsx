"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./snippet-tech.module.scss";
import getSnippets from "lib/getSnippets";
// import { useState, useEffect } from "react";
import { ReusableBanner } from "@/components/complex/reusable-banner/ReusableBanner";
// import SnippetTechPils from "./SnippetTechPils";
// import SnippetCard from "./SnippetCard";
import { RecentSnippets } from "@/components/complex/recent-snippets/RecentSnippets";
import { NormalTitle } from "@/components/basic/titles/NormalTitle";
import ParentTechSnippet from "./ParentTechSnippet";

type Params = {
	params: {
		snippets_tech: string;
	};
};

export default async function SnippetTech({
	params: { snippets_tech },
}: Params) {
	// const [snippetCardList, setSnippetCardList] = useState<Snippet[]>([]);
	// const [selectedTopic, setSelectedTopic] = useState<string>("");
	// const [filterTopics, setFilterTopics] = useState<Snippet[]>([]);

	const dataSnippets: Promise<Snippet[]> = getSnippets();
	const snippets = await dataSnippets;

	const snippets_type = snippets.filter((item) => item.tech === snippets_tech);

	// useEffect(() => {
	// 	async function fetchSnippetCards() {
	// 		const cardsResponse = await fetch(
	// 			"http://localhost:3001/snippetCardList",
	// 			{
	// 				cache: "no-store",
	// 			}
	// 		);
	// 		const cardsJson = await cardsResponse.json();

	// 		setSnippetCardList(cardsJson);
	// 		setFilterTopics(cardsJson);
	// 	}

	// 	fetchSnippetCards();
	// }, []);

	// setSnippetCardList(snippets_type);
	// setFilterTopics(snippets_type);

	// const handleTopicClick = (topic: string) => {
	// 	setSelectedTopic(topic);
	// 	if (topic === "") {
	// 		setFilterTopics(snippetCardList);
	// 	} else {
	// 		const filtered = snippetCardList.filter(
	// 			(item: Snippet) => item.topic === topic
	// 		);
	// 		setFilterTopics(filtered);
	// 	}
	// };

	return (
		<>
			<ReusableBanner title="snippets" />
			<ParentTechSnippet />
			{/* <SnippetTechPils
				snippetCardList={snippetCardList}
				handleTopicClick={handleTopicClick}
			/>
			<SnippetCard snippets_type={filterTopics} /> */}

			<NormalTitle title="Snippets Recientes" />
			<RecentSnippets />
		</>
	);
}
