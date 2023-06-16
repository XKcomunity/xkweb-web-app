import { GraphQLClient, gql } from "graphql-request";

const url: any = process.env.NEXT_PUBLIC_HYGRAPH_API;

const graphContent = new GraphQLClient(url);

export const getArticles = async () => {
	const query = gql`
		query {
			articles {
				content
				createdAt
				id
				level
				publishedAt
				shortDescription
				slug
				title
				image {
					url
				}
				author {
					name
					photo {
						url
					}
				}
				updatedAt
				url
			}
		}
	`;

	// const results: any = await request(hygraphAPI, query);

	const results: any = await graphContent.request(query);

	return results.articles;
};

export const getArticle = async (slug: string) => {
	const query = gql`
		query ($slug: String!) {
			article(where: { slug: $slug }) {
				createdAt
				title
				content
				author {
					photo {
						url
					}
					name
					bio
					description
					linkedIn
					twitter
					github
				}
				content
				shortDescription
				level
				image {
					url
				}
			}
		}
	`;

	// const results: any = await request(hygraphAPI, query);

	const results: any = await graphContent.request(query, { slug });

	return results.article;
};
