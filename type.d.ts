import { PortableTextBlock } from "sanity";

type Tecnology = {
	id: string;
	title: string;
	category: string;
	tech: string;
	img: string;
	color: string;
};

type Snippet = {
	codeList: LibraryCode[] | undefined;
	id: string;
	title: string;
	author: string;
	date: string;
	category: string;
	topic: string;
	tech: string;
	description: string;
	img: string;
	subTitle: string;
	code: string;
};

type Article = {
	_id: string;
	_createdAt: Date;
	name: string;
	slug: string;
	url: string;
	content: PortableTextBlock[];
}