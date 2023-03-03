
import styles from "../snippets/_snippetPage.module.scss";

async function fetchTechnologies() {
    const url = "http://localhost:3001/categoryLinks";
    const response = await fetch(url, { cache: "no-store" });
    const categoryLinkList = response.json();
    return categoryLinkList;
  }

  export default async function SnippetHeadingLinks() {

    const categoryLinks = await fetchTechnologies();
    const uniqueCategories = Array.from(new Set(categoryLinks.map((category) => category.category)));

    return (
        <>
            <div className={styles.headings_links_container}>
                {uniqueCategories.map((category) => (
                <button className={styles.snippetHeadingLinks} key={category}>
                    {category}
                </button>
                ))}

            </div>
        </>
    );
  }