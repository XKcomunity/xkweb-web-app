"use client"
import { useState, useEffect } from "react";
import { ReusableBanner } from "@/components/complex/reusable-banner/ReusableBanner";
import SnippetTechPils from "./SnippetTechPils";
import SnippetCard from "./SnippetCard";
import { RecentSnippets } from "@/components/complex/recent-snippets/RecentSnippets";
import { NormalTitle } from "@/components/basic/titles/NormalTitle";

export default function SnippetTech() {
  const [snippetCardList, setSnippetCardList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    async function fetchSnippetCards() {
      const cardsResponse = await fetch("http://localhost:3001/snippetCardList", {
        cache: "no-store",
      });
      const cardsJson = await cardsResponse.json();
      setSnippetCardList(cardsJson);
    }

    fetchSnippetCards();
  }, []);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };


  return (
    <>
      <ReusableBanner title="snippets" />
      <SnippetTechPils snippetCardList={snippetCardList} onTopicClick={handleTopicClick} />
      <SnippetCard snippetCardList={snippetCardList} />
      <NormalTitle title="Snippets Recientes" />
      <RecentSnippets />
    </>
  );
}
