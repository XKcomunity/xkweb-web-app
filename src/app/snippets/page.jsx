"use client";
import { useState, useEffect } from "react";
import styles from "./_snippetPage.module.scss";
import SnippetCategoryLinks from "./SnippetCategoryLinks";
import SnippetTechCard from "./snippetTechCard";
import MainTitleSection from "../../components/stateless/main-title-section/MainTitleSection";

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
				<MainTitleSection
					title1="Explora Por"
					title2="Temas"
					description="Esta sección está organizada por temas, al seleccionar uno en
					particular, podrás explorar una gran cantidad de snippets de código
					relacionados con ese tema en específico."
					subTitle="¡Imagina todo lo que puedes aprender y descubrir en esta sección!"
				/>
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
