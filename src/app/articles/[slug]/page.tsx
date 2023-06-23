import { getArticle } from "../../../../hygraph/fetchings";
import { WrapperInfoDetails } from "@/components/stateless/wrapper-info-details/WrapperInfoDetails";
import { SecondaryTitle } from "@/components/stateless/titles/SecondaryTitle";
import styles from "./article-slug.module.scss";
import { BannerHeaderInfo } from "@/components/stateless/BannerInfo/BannerHeaderInfo";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs";
type Props = {
	params: { slug: string };
};

export default async function Article({ params }: Props) {
	const slug = params.slug;
	const article = await getArticle(slug);
	const { date, level, shortDescription, title } = article;

	return (
		<>
			<BannerHeaderInfo data={article} />
			<WrapperInfoDetails data={article}>
				<Image src={article.image.url} alt="" width={1000} height={300} />
				<main>
					<section className={styles.article_reference}>
						<div className={styles.author_date}>
							<h4>Fecha:</h4>
							<p>{date}</p>
						</div>
						<div className={styles.author_level}>
							<h4 className="">Nivel:</h4>
							<p>{level}</p>
						</div>
					</section>
					<SecondaryTitle title={title} />

					<p>{shortDescription}</p>
					<RichText
						content={article.content.json}
						renderers={{
							h1: ({ children }) => (
								<h1 className={styles.richtext}>{children}</h1>
							),

							code: ({ children }) => (
								<code>
									<SyntaxHighlighter language="javascript" style={irBlack}>
										{children}
									</SyntaxHighlighter>
								</code>
							),
							h2: ({ children }) => (
								<h2 className={styles.subtitle}>{children}</h2>
							),
						}}
					/>
				</main>
			</WrapperInfoDetails>
		</>
	);
}
