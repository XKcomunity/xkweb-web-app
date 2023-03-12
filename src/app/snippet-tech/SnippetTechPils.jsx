
import styles from "./snippet-tech.module.scss";

export default function SnippetTechPils({ snippetCardList, handleTopicClick }) {
  const uniquePils = [...new Set(snippetCardList.map((item) => item.topic))];

  return (
    <>
      <section className={styles.snippet_tech_wrapper}>
        <article className={styles.snippet_tech_content}>
          {uniquePils.map((topic, index) => (
            <button className={styles.pils_button} key={index}
            onClick={() => handleTopicClick(topic)}>
              {topic}
            </button>
          ))}
        </article>
      </section>
    </>
  );
}
