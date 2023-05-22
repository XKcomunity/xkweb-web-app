"use client";
import config from "../../../../sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function Articles() {
	return <NextStudio config={config} />;
}
