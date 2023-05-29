const article = {
	name: "articles",
	title: "Articles",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "slug",
			type: "slug",
			options: { source: "title" },
		},
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "level",
      title: "Level",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      of: [{ type: "block" }]
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }]
    },
	],
};

export default article;