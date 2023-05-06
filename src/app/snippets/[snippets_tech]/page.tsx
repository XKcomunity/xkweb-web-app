import getSnippets from "lib/getSnippets";
import { ReusableBanner } from "@/components/complex/reusable-banner/ReusableBanner";
import { RecentSnippets } from "@/components/complex/recent-snippets/RecentSnippets";
import { NormalTitle } from "@/components/basic/titles/NormalTitle";
import ParentTechSnippet from "./ParentTechSnippet";

type Params = {
	params: {
		snippets_tech: string;
	};
};

export default async function SnippetTech({
	params: { snippets_tech },
}: Params) {
	const dataSnippets: Promise<Snippet[]> = getSnippets();
	const snippets = await dataSnippets;

	const snippets_type = snippets.filter((item) => item.tech === snippets_tech);

	return (
		<>
			<ReusableBanner title="snippets" />
			<ParentTechSnippet />
			<NormalTitle title="Snippets Recientes" />
			<RecentSnippets />
		</>
	);
}
