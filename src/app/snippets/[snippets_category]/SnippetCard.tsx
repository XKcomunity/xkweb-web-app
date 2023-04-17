// import Image from "next/image";
// import styles from "./snippet-tech.module.scss";
// import getSnippets from "lib/getSnippets";

// type Params = {
// 	params: {
// 		snippets_category: string;
// 	};
// };

// export default async function SnippetCard({
// 	params: { snippets_category },
// }: Params) {
// 	const dataSnippets: Promise<Snippet[]> = getSnippets();
// 	const snippets = await dataSnippets;

// 	const snippets_type = snippets.filter(
// 		(item) => item.category === snippets_category
// 	);
// 	return (
// 		<section className={styles.snippet_card_container}>
// 			{snippets_type.map((snippet) => (
// 				<article key={snippet.id} className={styles.snippet_card}>
// 					<div className={styles.snippet_card_heading}>
// 						<Image
// 							src={snippet.img}
// 							className={styles.snippet_card_img}
// 							alt=""
// 							width={50}
// 							height={50}
// 						/>
// 						<div className={styles.snippet_card_heading_text}>
// 							<h3>{snippet.title}</h3>
// 							<h5>{snippet.subTitle}</h5>
// 						</div>
// 					</div>
// 					<p className={styles.snippet_card_paragraph}>{snippet.description}</p>
// 				</article>
// 			))}
// 		</section>
// 	);
// }
