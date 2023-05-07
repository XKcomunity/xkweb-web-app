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
	return (
		<>
			<ReusableBanner title={snippets_tech} />
			<ParentTechSnippet />
			<NormalTitle title="Snippets Recientes" />
			<RecentSnippets />
		</>
	);
}
