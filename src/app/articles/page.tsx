import { getArticles } from "../../../sanity/sanity-utils";
import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";
import styles from "../../components/stateless/articles-card/article-card.module.scss";
import { ArticleCard } from "@/components/stateless/articles-card/ArticleCard";

export default async function Articles() {

  const articles = await getArticles();

	return (
    <>
      <ReusableBanner title={"Pagina de articulos"} />

      <main className={styles.grid}>
        {articles.map((article) => (
          <div key={article._id}>
            <ArticleCard
              title={article.title}
              shortDescription={article.shortDescription}
              author={article.author}
              level={article.level}
              />
          </div>
        ))}
      </main>
    </>
  )
}
