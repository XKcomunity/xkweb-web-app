import styles from "../snippets/_snippetPage.module.scss";

export default function SnippetHeadingLinks({ technologies, handleCategoryClick}) {

    const uniqueCategories = [...new Set(technologies.map((item) => item.category))];

    return (
        <>
            <div className={styles.headings_links_container}>
            <button className={styles.snippetHeadingLinks} onClick={() => handleCategoryClick(null)}>Todas</button>
                {uniqueCategories.map((cat,index) => (
                <button className={styles.snippetHeadingLinks} key={index}
                onClick={() => handleCategoryClick(cat)}>
                    {cat}
                </button>
                ))}
            </div>
        </>
    );
}
