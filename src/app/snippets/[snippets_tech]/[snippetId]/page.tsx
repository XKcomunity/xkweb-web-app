import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";
import { RecentSnippets } from "@/components/stateless/recent-snippets/RecentSnippets";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import { WrapperInfoDetails } from "@/components/stateless/wrapper-info-details/WrapperInfoDetails";
import { SecondaryTitle } from "@/components/stateless/titles/SecondaryTitle";
import SnippetArticle from "./SnippetArticle";
import getSnippetId from "@/lib/getSnippetId";

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
        <SecondaryTitle title={snippet.title} />
					{/* <AuthorInfo authorName={snippet.author} date={snippet.date} /> */}
					<SnippetArticle
						description={snippet.description}

					/>
			</WrapperInfoDetails>

			<TitleComponent title={subTitle} />
			<RecentSnippets />
		</>
	);
}
