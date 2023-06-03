import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";
import { getArticle } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { RecentSnippets } from "@/components/stateless/recent-snippets/RecentSnippets";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import { WrapperInfoDetails } from "@/components/stateless/wrapper-info-details/WrapperInfoDetails";
import { AuthorInfo } from "@/components/stateless/author-info/AuthorInfo";

type Props = {
	params: { article: string };
};

export default async function Article({ params }: Props) {
	const slug = params.article;
	const article = await getArticle(slug);

	return (
		<>
			<ReusableBanner title={"Articulo por ID"} />
			<WrapperInfoDetails data={article}>
				<main>
					<h1>{article.title}</h1>
					<p>{article.level}</p>
					<p>{article.shortDescription}</p>
					<PortableText value={article.content} />
				</main>
				<AuthorInfo authorName={article.author} date={article._createdAt} />
			</WrapperInfoDetails>
			<TitleComponent title="Articulos Recientes" />
      <RecentSnippets />
		</>
	);
}
