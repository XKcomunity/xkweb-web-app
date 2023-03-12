import styles from "../snippets/_snippetPage.module.scss";

export default function SnippetHeadingLinks({ technologies, handleCategoryClick }) {

    const uniqueCategories = [...new Set(technologies.map((item) => item.category))];

    return (
        <>
            <div className={styles.headings_links_container}>
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
