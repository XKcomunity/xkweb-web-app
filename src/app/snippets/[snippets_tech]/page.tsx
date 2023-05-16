import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";
import { RecentSnippets } from "@/components/stateless/recent-snippets/RecentSnippets";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
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
