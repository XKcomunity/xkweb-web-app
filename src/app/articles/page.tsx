import { getArticles } from "../../../sanity/sanity-utils";
import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";

export default async function Articles() {

  const articles = await getArticles();

  return (
    <main>
      <ReusableBanner title={"Pagina de articulos"} />
      {articles.map((article) => (
        <div key={article._id}>{article.name}</div>
      ))}
    </main>
  )

}

