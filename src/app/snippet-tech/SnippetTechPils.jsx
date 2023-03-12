
import styles from "./snippet-tech.module.scss";

export default function SnippetTechPils({ snippetCardList, onTopicClick }) {
  const uniquePils = [...new Set(snippetCardList.map((item) => item.topic))];

  return (
    <>
      <section className={styles.snippet_tech_wrapper}>
        <article className={styles.snippet_tech_content}>
          {uniquePils.map((pils, index) => (
            <button className={styles.pils_button} key={index}
            onClick={() => onTopicClick(pils)}>
              {pils}
            </button>
          ))}
        </article>
      </section>
    </>
  );
}
