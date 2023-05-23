import { createClient, groq } from "next-sanity";
import { Article } from "type";

export async function getArticles(): Promise<Article[]> {
  const client = createClient({
    projectId:  "nq7xymor",
    dataset: "production",
    apiVersion: "2023-05-25",
  });

  return client.fetch(
    groq`*[_type == "articles"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset-url,
      url,
      content
    }`
  )

}