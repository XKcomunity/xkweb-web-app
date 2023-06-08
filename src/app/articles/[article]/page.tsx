import { getArticle } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { WrapperInfoDetails } from "@/components/stateless/wrapper-info-details/WrapperInfoDetails";
import { BlogTitle } from "@/components/stateless/titles/BlogTitle";
import styles from "./article-slug.module.scss";
import { formatDate } from "@/utils/dateTime";
import { BannerHeaderInfo } from "@/components/stateless/BannerInfo/BannerHeaderInfo";

type Props = {
	params: { article: string };
};

export default async function Article({ params }: Props) {

	const slug = params.article;
	const article = await getArticle(slug);

	return (
		<>
			<BannerHeaderInfo authorName={article.author} image={""} description={""} />
			<WrapperInfoDetails data={article}>
				<main>
					<section className={styles.article_reference}>
						<div className={styles.author_date}>
							<h4>Fecha:</h4>
							<p>{formatDate(article._createdAt)}</p>
						</div>
						<div className={styles.author_level}>
							<h4 className=''>Nivel:</h4>
							<p>{article.level}</p>
						</div>
					</section>
					<BlogTitle title={article.title} />

					<p>{article.shortDescription}</p>
					<PortableText value={article.content} />
				</main>
			</WrapperInfoDetails>
		</>
	);
}
