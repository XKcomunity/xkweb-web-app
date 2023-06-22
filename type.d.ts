import { ElementNode } from "@graphcms/rich-text-types";

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
	image: string;
	author: Author;
	level: string;
	slug: string;
	url: string;
	shortDescription: string;
	content: {
		json: ElementNode;
	};
	date: Date;
};

type Author = {
	name: string;
	photo: { url: string };
	bio: string;
	description: string;
	linkedIn: string;
	twitter: string;
	instagram: string;
	github: string;
	youtube: string;
	discord: string;
	articles: Article[];
	snippets: Snippet[];
};
