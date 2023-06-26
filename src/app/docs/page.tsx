"use client";
import { useFetchLinks } from "@/hooks/useFetchLinks";
import MainTitleSection from "@/components/stateless/titles/MainTitleSection";
import WapperButtons from "./WrapperButtons";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import styles from "./links.module.scss";
import { SecondaryTitle } from "@/components/stateless/titles/SecondaryTitle";
import { DocLink, Docs } from "type";
import Link from "next/link";
import { Dropdown } from "rsuite";

const data = {
	title: "Aprende y ",
	span: "Crea",
	description:
		"Sumérgete en nuestra sección especializada que alberga una amplia variedad de enlaces, documentos, PDFs e información valiosa sobre el mundo del diseño y desarrollo web. Obtén acceso a los recursos necesarios para potenciar tus habilidades.",
	subTitle: "Recursos y Conocimientos para el Diseño y Desarrollo Web",
	titleComponet: "Links - Recursos",
};

const newLink = (props: any) => {
	const { href, children, ...rest } = props;
	return (
		<Link
			href={href}
			{...rest}
			style={{
				width: 500,
				color: "green",
			}}
		>
			{children}
		</Link>
	);
};
export default function Docs() {
	let titleComponentProps = data.titleComponet;
	const { docs } = useFetchLinks("http://localhost:3001/docs");

	return (
		<>
			<MainTitleSection
				title={data.title}
				span={data.span}
				description={data.description}
				subTitle={data.subTitle}
			/>
			<WapperButtons />
			<article className={styles.grid}>
				<SecondaryTitle title="Cheat Sheets PDFs" />
				<section className={styles.pdf__wrapper}></section>
			</article>

			<TitleComponent title={titleComponentProps} />
			<section className={styles.wrapper__links}>
				{docs.map((doc: Docs) => (
					<Dropdown key={doc.id} title={doc.title}>
						{doc.links.map((link: DocLink) => (
							<Dropdown.Item
								key={link.id}
								as={newLink}
								href={link.url}
								target="_blank"
							>
								{link.name}
							</Dropdown.Item>
						))}
					</Dropdown>
				))}
			</section>
		</>
	);
}
