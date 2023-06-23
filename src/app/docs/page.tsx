"use client"
import { useFetchLinks } from "@/hooks/useFetchLinks";
import MainTitleSection from "@/components/stateless/titles/MainTitleSection";
import WapperButtons from "./WrapperButtons";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import styles from "./links.module.scss";
import { SecondaryTitle } from "@/components/stateless/titles/SecondaryTitle";
import { Docs } from "type";

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
			<SecondaryTitle title="CHEAT SHEETS PDFs" />

			<TitleComponent title={titleComponentProps} />
			<section className={styles.wrapper__links}>
        {docs.map((doc) => (
          <select className={styles.link__select} key={doc.id}>
						<option disabled selected>{doc.title}</option>
							{doc.links.map((link: Docs) => (
						<option key={link.id} >{link.name}</option>
      	))}
    		</select>
  			))}
			</section>
		</>
	);
}
