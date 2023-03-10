import { ReusableBanner } from "@/components/complex/reusable-banner/ReusableBanner";
import { RecentSnippets } from "@/components/complex/recent-snippets/RecentSnippets";
import { NormalTitle } from "@/components/basic/titles/NormalTitle";
import MainContainer from "./MainContainer";

export default function SnippetChosen() {

	const title = "Snippet elegido"
	const subTitle = "Snippets Recientes"

	return (
		<>
        	<ReusableBanner title={title} />
            <MainContainer />
			<NormalTitle title={subTitle} />
			<RecentSnippets />
		</>
	);
}
