import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";
import { getArticle } from "../../../../sanity/sanity-utils";

type Props = {
  params: { article: string }
}

export default async function Article({ params }:Props ) {

const slug = params.article;
const article = await getArticle(slug);

	return (
    <>
    <ReusableBanner title={"Pagina de articulos"} />
    <main>
      <h1 key={article._id}>{article.slug}</h1>
    </main>
    </>
  )
}
