"use client"
import { useFetchLinks } from "@/hooks/useFetchLinks";
import MainTitleSection from "@/components/stateless/titles/MainTitleSection";
import WapperButtons from "./WrapperButtons";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import styles from "./links.module.scss";
import { SecondaryTitle } from "@/components/stateless/titles/SecondaryTitle";
import { Docs } from "type";
import PdfCard from "@/components/stateless/pdf/PdfCard";

const data = {
	title: "Aprende y ",
	span: "Crea",
	description:
		"Sumérgete en nuestra sección especializada que alberga una amplia variedad de enlaces, documentos, PDFs e información valiosa sobre el mundo del diseño y desarrollo web. Obtén acceso a los recursos necesarios para potenciar tus habilidades.",
	subTitle:
		"Recursos y Conocimientos para el Diseño y Desarrollo Web",
	titleComponet: "Links - Recursos"
};

export default function Docs() {
	let titleComponentProps = data.titleComponet;
	const {
		docs,
	} = useFetchLinks("http://localhost:3001/docs");

	return (
		<>
			<MainTitleSection
				title={data.title}
				span={data.span}
				description={data.description}
				subTitle={data.subTitle}
			/>
			<WapperButtons />
			<article className={styles.flex}>
				 <section className={styles.pdf__wrapper}>
					  <PdfCard />
				 </section>
				 <TitleComponent title={"Cheat Sheets PDFs"}>
				 </TitleComponent>
			</article>

			<TitleComponent title={titleComponentProps} />
			<section className={styles.wrapper__links}>
			{docs.map((doc) => (
				<select
						className={styles.link__select}
						key={doc.id}
						defaultValue={'DEFAULT'}
						onChange={(e) => window.open(e.target.value, '_blank')}
				>
						<option value='DEFAULT' disabled>{doc.title}</option>
						{doc.links.map((link: Docs) => (
								<option key={link.id} value={link.url}>
										{link.name}
								</option>
						))}
				</select>
			))}
			</section>
		</>
	);
}
