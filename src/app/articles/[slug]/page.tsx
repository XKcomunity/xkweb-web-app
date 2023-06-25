import { getArticle } from "../../../../hygraph/articles";
import { BannerHeaderInfo } from "@/components/stateless/BannerInfo/BannerHeaderInfo";
import { WrapperInfoDetails } from "@/components/stateless/wrapper-info-details/WrapperInfoDetails";
import { SecondaryTitle } from "@/components/stateless/titles/SecondaryTitle";
import { RichText } from "@graphcms/rich-text-react-renderer";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./article-slug.module.scss";

type Props = {
	params: { slug: string };
};

export default async function Article({ params }: Props) {
	const slug = params.slug;
	const article = await getArticle(slug);
	const { shortDescription, title } = article;

	return (
		<>
			<WrapperInfoDetails data={article}>
			<BannerHeaderInfo data={article} />
				<div className={styles.overlay}></div>
				<main>
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
