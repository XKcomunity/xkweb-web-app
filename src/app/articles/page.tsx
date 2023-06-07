"use client"
import { getArticles } from "../../../sanity/sanity-utils";
import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";
import { ArticleCard } from "@/components/stateless/articles-card/ArticleCard";
import styles from "./_articles.module.scss";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import { RecentSnippets } from "@/components/stateless/recent-snippets/RecentSnippets";
import ContainerButton from "@/components/stateless/container-button/ContainerButton";
import Link from "next/link";

export default async function Articles() {

  const articles = await getArticles();

	return (
    <>
      <ReusableBanner title={"Lista De Articulos"} />

      <main className={styles.container}>
        {articles.map((article) => (
          <Link  href={`/article/${article.slug}`} key={article._id}>
              <div className={styles.articleCardWrapper}>
                <ArticleCard
                  image={article.image}
                  title={article.title}
                  shortDescription={article.shortDescription}
                  author={article.author}
                  level={article.level}
                />
            </div>
            </Link>
        ))}
      </main>
      <TitleComponent title="Snippets Recientes" />
      <RecentSnippets />
      <ContainerButton buttonText="Explorar Snippets" route="/snippets" />

    </>
  )
}
