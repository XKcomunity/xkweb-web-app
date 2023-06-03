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

type Article = {
	_id: string;
	_createdAt: Date;
  title: string;
  image: image;
  author: string;
  level: string;
	slug: string;
	url: string;
	shortDescription: string;
	content: PortableTextBlock[];
};
