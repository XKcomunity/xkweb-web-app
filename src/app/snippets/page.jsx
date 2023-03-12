"use client"
import { useState, useEffect } from "react";
import styles from "../snippets/_snippetPage.module.scss";
import MainTitle_snipet from "./MainTitle_snippet";
import SnippetHeadingLinks from "./SnippetHeadingLinks";
import SnippetTechCard from "./snippetTechCard";

export default function Snippet() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function fetchSnippetCards() {
      const cardsResponse = await fetch("http://localhost:3001/technologies", {
        cache: "no-store",
      });
      const cardsJson = await cardsResponse.json();
      setTechnologies(cardsJson);
    }

    fetchSnippetCards();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

    // Filtrar las tecnologías en función del tema seleccionado.
    const filteredTechnologies = selectedCategory ? technologies.filter((technology) => technology.category === selectedCategory) : technologies;


  return (
    <>
      <main className={styles.main_snippet}>
        <MainTitle_snipet />
        <SnippetHeadingLinks technologies={technologies} handleCategoryClick={handleCategoryClick} />
        <div className={styles.divider}></div>
        <div className={styles.tech_cards_wrapper}>
          <SnippetTechCard technologies={technologies}  />
        </div>
      </main>
    </>
  );
}
