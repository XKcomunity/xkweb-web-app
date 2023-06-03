import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";
import { RecentSnippets } from "@/components/stateless/recent-snippets/RecentSnippets";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import { WrapperInfoDetails } from "@/components/stateless/wrapper-info-details/WrapperInfoDetails";
import { BlogTitle } from "@/components/stateless/titles/BlogTitle";
import { AuthorInfo } from "@/components/stateless/author-info/AuthorInfo";
import SnippetArticle from "./SnippetArticle";
import getSnippetId from "@/lib/getSnippetId";
import { Snippet } from "type";

type Params = {
	params: {
		snippetId: string;
	};
};

export default async function SnippetChosen({ params: { snippetId } }: Params) {
	const subTitle = "Snippets Recientes";

	const dataSnippetId: Promise<Snippet> = getSnippetId(snippetId);
	const snippet = await dataSnippetId;

	return (
		<>
			<ReusableBanner title={snippet.tech} />
			{/* <WrapperInfoDetails snippet={snippet} /> */}
			<WrapperInfoDetails data={snippet}>
        <BlogTitle title={snippet.title} />
					<AuthorInfo authorName={snippet.author} date={snippet.date} />
					<SnippetArticle
						description={snippet.description}
						// code={{
						// 	title: "",
						// 	code: "",
						// }}
					/>
			</WrapperInfoDetails>

			<TitleComponent title={subTitle} />
			<RecentSnippets />
		</>
	);
}
