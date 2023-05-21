import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId:  "nq7xymor",
  dataset: "production",
  title: "xkweb-articles",
  apiVersion: "2023-21-05",
  basePath: "/articles",
  plugins: [deskTool()],
  schema: { types: schemas }
})


export default config;