import MainTitleSection from "@/components/stateless/main-title-section/MainTitleSection";
import WapperButtons from "./WrapperButtons";

const data = {
	title1: "Explora por",
	title2: "Temas",
	description:
		"Esta sección está organizada por temas, al seleccionar uno en particular, podrás explorar una gran cantidad de documentaciones y articulos relacionados con ese tema en específico.",
	subTitle:
		"¡En esta sección tendrás a tu disposición un rico caudal de información!",
};

export default function Docs() {
	return (
		<>
			<MainTitleSection
				title1={data.title1}
				title2={data.title2}
				description={data.description}
				subTitle={data.subTitle}
			/>
			<WapperButtons />
		</>
	);
}
