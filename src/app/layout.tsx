"use client";
import "./globals.scss";
import { NavBar } from "@/components/statefull/navbar/NavBar";
import { Footer } from "@/components/stateless/footer/Footer";
import ScrollTopButton from "@/components/statefull/buttons/ScrollTopButton";
import React from "react";
import { useQuiz } from "@/store/useQuiz";

export default function RootLayout({
	children,
	quiz,
}: {
	children: React.ReactNode;
	quiz: React.ReactNode;
}) {
	const config = useQuiz((state: any) => state.config);
	let render = config.status === "start" ? quiz : children;
	return (
		<html lang="es">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />

			<body>
				<NavBar />
				<ScrollTopButton />
				{render}
				<Footer />
			</body>
		</html>
	);
}
