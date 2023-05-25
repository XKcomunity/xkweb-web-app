import { createClient, groq } from "next-sanity";
import { Article } from "type";
import clientConfig from "./config/client-config";

export async function getArticles(): Promise<Article[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "article"]{
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

export async function getArticle(slug:string): Promise<Article> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset-url,
      url,
      content
    }`,
    { slug }
  )
}