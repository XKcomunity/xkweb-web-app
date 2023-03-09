// "use client"
import styles from "./snippet-tech.module.scss";

async function fetchSnippetPils() {
	const pilsListResponse = await fetch("http://localhost:3001/snippetCardList", {
		cache: "no-store",
	});
    const pilsList = pilsListResponse.json();
    return pilsList;
}

export default async function SnippetTechPils() {

    const snippetPilsList = await fetchSnippetPils();
    const uniquePils = snippetPilsList.filter((pils, index, arr) => {
        return arr.findIndex((p) => p.topic === pils.topic) === index;
      });

    // const handlePilsButtonClick = (topic) => {
    //     return snippetPilsList.filter((pils) => pils.topic === topic)
    // };

    //  onClick={() => handlePilsButtonClick(pils.topic)}

    return (
        <>
            <section className={styles.snippet_tech_wrapper}>
                <article className={styles.snippet_tech_content}>
                    {uniquePils.map((pils) => (
                       <button className={styles.pils_button} key={pils.id}
                           >{pils.topic}</button>
                    ))}
                </article>
            </section>
        </>
    );
}
