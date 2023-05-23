import { PortableTextBlock } from "sanity";

type Technology = {
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

interface Article {
	_id: string;
	_createdA?: Date;
	name: string;
	slug: string;
	content: PortableTextBlock[];
	code?: string;
	title?: string;
	author?: string;
}