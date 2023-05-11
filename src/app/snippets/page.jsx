"use client";
import { useState, useEffect } from "react";
import styles from "./_snippetPage.module.scss";
import MainTitleSnippet from "./MainTitleSnippet";
import SnippetCategoryLinks from "./SnippetCategoryLinks";
import SnippetTechCard from "./snippetTechCard";

export default function Snippet() {
	const [technologies, setTechnologies] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [filteredTechnologies, setFilteredTechnologies] = useState([]);

	useEffect(() => {
		async function fetchSnippetCards() {
			const cardsResponse = await fetch("http://localhost:3001/technologies", {
				cache: "no-store",
			});
			const cardsJson = await cardsResponse.json();
			setTechnologies(cardsJson);
			setFilteredTechnologies(cardsJson);
		}

		fetchSnippetCards();
	}, []);

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
		if (category === null) {
			setFilteredTechnologies(technologies);
		} else {
			const filtered = technologies.filter(
				(technology) => technology.category === category
			);
			setFilteredTechnologies(filtered);
		}
	};

	return (
		<>
			<main className={styles.main_snippet}>
				<MainTitleSnippet />
				<SnippetCategoryLinks
					technologies={technologies}
					handleCategoryClick={handleCategoryClick}
				/>
				<div className={styles.divider}></div>
				<div className={styles.tech_cards_wrapper}>
					<SnippetTechCard technologies={filteredTechnologies} />
				</div>
			</main>
		</>
	);
}
