import styles from "./article-id.module.scss";
import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";
import { getArticle } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { RecentSnippets } from "@/components/stateless/recent-snippets/RecentSnippets";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";

type Props = {
	params: { article: string };
};

export default async function Article({ params }: Props) {
	const slug = params.article;
	const article = await getArticle(slug);

	return (
		<>
			<ReusableBanner title={"Articulo por ID"} />
			<div>
				<main>
					<h1>{article.level}</h1>
					<h1>{article.author}</h1>
					<p>{article.shortDescription}</p>
					<PortableText value={article.content} />
				</main>
			</div>
			<TitleComponent title="Articulos Recientes" />
      <RecentSnippets />
		</>
	);
}
