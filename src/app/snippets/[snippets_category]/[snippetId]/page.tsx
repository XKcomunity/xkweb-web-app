import { ReusableBanner } from "@/components/complex/reusable-banner/ReusableBanner";
import { RecentSnippets } from "@/components/complex/recent-snippets/RecentSnippets";
import { NormalTitle } from "@/components/basic/titles/NormalTitle";
import MainContainer from "./MainContainer";
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
			<ReusableBanner title={title} />
			<MainContainer snippet={snippet} />
			<NormalTitle title={subTitle} />
			<RecentSnippets />
		</>
	);
}
