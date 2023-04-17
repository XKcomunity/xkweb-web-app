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

type Params = {
	params: {
		snippets_category: string;
	};
};

export default async function SnippetTech({
	params: { snippets_category },
}: Params) {
	// const [snippetCardList, setSnippetCardList] = useState([]);
	// const [selectedTopic, setSelectedTopic] = useState(null);
	// const [filterTopics, setFilterTopics] = useState([]);

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

	// const handleTopicClick = (topic: any) => {
	// 	setSelectedTopic(topic);
	// 	if (topic === null) {
	// 		setFilterTopics(snippetCardList);
	// 	} else {
	// 		const filtered = snippetCardList.filter(
	// 			(item: any) => item.topic === topic
	// 		);
	// 		setFilterTopics(filtered);
	// 	}
	// };

	const dataSnippets: Promise<Snippet[]> = getSnippets();
	const snippets = await dataSnippets;

	const snippets_type = snippets.filter(
		(item) => item.category === snippets_category
	);

	return (
		<>
			<ReusableBanner title="snippets" />
			{/* <SnippetTechPils
				snippetCardList={snippetCardList}
				handleTopicClick={handleTopicClick}
			/>
			<SnippetCard /> */}

			<section className={styles.snippet_card_container}>
				{snippets_type.map((snippet) => (
					<article key={snippet.id} className={styles.snippet_card}>
						<Link href={`/snippets/${snippet.category}/${snippet.id}`}>
							<div className={styles.snippet_card_heading}>
								<Image
									src={snippet.img}
									className={styles.snippet_card_img}
									alt=""
									width={50}
									height={50}
								/>
								<div className={styles.snippet_card_heading_text}>
									<h3>{snippet.title}</h3>
									<h5>{snippet.subTitle}</h5>
								</div>
							</div>
							<p className={styles.snippet_card_paragraph}>
								{snippet.description}
							</p>
						</Link>
					</article>
				))}
			</section>
			<NormalTitle title="Snippets Recientes" />
			<RecentSnippets />
		</>
	);
}
