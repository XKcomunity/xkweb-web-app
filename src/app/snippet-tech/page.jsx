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
  const [filterTopics, setFilterTopics] = useState([]);

  useEffect(() => {
    async function fetchSnippetCards() {
      const cardsResponse = await fetch("http://localhost:3001/snippetCardList", {
        cache: "no-store",
      });
      const cardsJson = await cardsResponse.json();
      setSnippetCardList(cardsJson);
      setFilterTopics(cardsJson);
    }

    fetchSnippetCards();
  }, []);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    const filtered = snippetCardList.filter((item) => item.topic === topic);
    setFilterTopics(filtered);
  };

  return (
    <>
      <ReusableBanner title="snippets" />
      <SnippetTechPils snippetCardList={snippetCardList}
                       handleTopicClick={handleTopicClick} />
      <SnippetCard snippetCardList={filterTopics} />
      <NormalTitle title="Snippets Recientes" />
      <RecentSnippets />
    </>
  );
}
