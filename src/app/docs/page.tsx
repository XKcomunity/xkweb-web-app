"use client";
import MainTitle_snipet from "../snippets/MainTitleSnippet";
import WapperButtons from "./WrapperButtons";
import DocsContainer from "./DocsContainer";
import { TitleComponent } from "@/components/basic/titles/TitleComponent";

export default function Docs() {
	return (
		<>
			<MainTitle_snipet />
			<WapperButtons />
			<TitleComponent title="Libros"/>
			<DocsContainer />
			<TitleComponent title="Enlaces A Documentación"/>
		</>
	);
}
