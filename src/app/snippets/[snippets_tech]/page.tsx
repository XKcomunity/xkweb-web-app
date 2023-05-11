import { ReusableBanner } from "@/components/complex/reusable-banner/ReusableBanner";
import { RecentSnippets } from "@/components/complex/recent-snippets/RecentSnippets";
import { TitleComponent } from "@/components/basic/titles/TitleComponent";
import SnippetsByTech from "./SnippetsByTech";

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
			<SnippetsByTech />
			<TitleComponent title="Snippets Recientes" />
			<RecentSnippets />
		</>
	);
}
