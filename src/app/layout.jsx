import "./globals.scss";
import { NavBar } from "@/components/complex/navbar/NavBar";
import { Footer } from "@/components/complex/footer/Footer";

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<NavBar />
			<body>{children}</body>
			<Footer />
		</html>
	);
}
