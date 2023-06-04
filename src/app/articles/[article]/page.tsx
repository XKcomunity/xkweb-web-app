import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";
import { getArticle } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { RecentSnippets } from "@/components/stateless/recent-snippets/RecentSnippets";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import { WrapperInfoDetails } from "@/components/stateless/wrapper-info-details/WrapperInfoDetails";
import { AuthorInfo } from "@/components/stateless/author-info/AuthorInfo";
import { BlogTitle } from "@/components/stateless/titles/BlogTitle";
import Image from "next/image";
import styles from "../_articles.module.scss";

type Props = {
	params: { article: string };
};

export default async function Article({ params }: Props) {
	const slug = params.article;
	const article = await getArticle(slug);

	return (
		<>
			<ReusableBanner title={article.title} />
			<WrapperInfoDetails data={article}>
				<main>
					<div className={styles.article_main_image_wrapper}>
					{article.image && (
  					<Image src={article.image}
							className={styles.article_main_image}
							alt={article.title}
							width={800}
							height={300} />
					)}
					</div>
					<div className={styles.nivel_wrapper}>
						<span className={styles.bold_footer}>Nivel:</span>
						<p>{article.level}</p>
					</div>
					<BlogTitle title={article.title} />
					<section className={styles.flex}>
						<AuthorInfo authorName={article.author} date={article._createdAt} />
					</section>
					<p>{article.shortDescription}</p>
					<PortableText value={article.content} />
				</main>
				</WrapperInfoDetails>
		</>
	);
}
