import { getArticle } from "../../../../hygraph/fetchings";
import { WrapperInfoDetails } from "@/components/stateless/wrapper-info-details/WrapperInfoDetails";
import { BlogTitle } from "@/components/stateless/titles/BlogTitle";
import styles from "./article-slug.module.scss";
import { BannerHeaderInfo } from "@/components/stateless/BannerInfo/BannerHeaderInfo";
import Image from "next/image";

type Props = {
	params: { slug: string };
};

export default async function Article({ params}: Props) {

	const slug = params.slug;
	const article = await getArticle(slug);
	const { createdAt,level, shortDescription, title } = article;

	return (
		<>
			<BannerHeaderInfo data={article} />
			<WrapperInfoDetails data={article}>
			<Image src={article.image.url} alt="" width={1000} height={300} />
				<main>
					<section className={styles.article_reference}>
						<div className={styles.author_date}>
							<h4>Fecha:</h4>
							<p>{createdAt}</p>
						</div>
						<div className={styles.author_level}>
							<h4 className=''>Nivel:</h4>
							<p>{level}</p>
						</div>
					</section>
					<BlogTitle title={title} />

					<p>{shortDescription}</p>
				</main>
			</WrapperInfoDetails>
		</>
	);
}
