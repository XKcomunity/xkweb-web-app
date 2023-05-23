import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId:  "nq7xymor",
  dataset: "production",
  title: "Articles",
  apiVersion: "2023-05-25",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})


export default config;