import { ReusableBanner } from "@/components/complex/reusable-banner/ReusableBanner";
import { RecentSnippets } from "@/components/complex/recent-snippets/RecentSnippets";
import { TitleComponent } from "@/components/basic/titles/TitleComponent";
import SnippetDescriptionContainer from "./SnippetDescriptionContainer";
import getSnippetId from "lib/getSnippetId";

type Params = {
	params: {
		snippetId: string;
	};
};

export default async function SnippetChosen({ params: { snippetId } }: Params) {
	const title = "Snippet elegido";
	const subTitle = "Snippets Recientes";

	const dataSnippetId: Promise<Snippet> = getSnippetId(snippetId);
	const snippet = await dataSnippetId;

	return (
		<>
			<ReusableBanner title={snippet.tech} />
			<SnippetDescriptionContainer snippet={snippet} />
			<TitleComponent title={subTitle} />
			<RecentSnippets />
		</>
	);
}
