// "use client";
import { ReusableBanner } from "@/components/complex/reusable-banner/ReusableBanner";
import SnippetTechPils from "./SnippetTechPils";
import SnippetCard from "./SnippetCard";
import { RecentSnippets } from "@/components/complex/recent-snippets/RecentSnippets";
import { NormalTitle } from "@/components/basic/titles/NormalTitle";

export default function SnippetTech() {
	return (
		<>
			<ReusableBanner />
			<SnippetTechPils />
			<SnippetCard />
			<NormalTitle homeTitle="Snippets Recientes" />
			<RecentSnippets />
		</>
	);
}
