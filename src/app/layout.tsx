import "./globals.scss";
import { NavBar } from "@/components/complex/navbar/NavBar";
import { Footer } from "@/components/complex/footer/Footer";
import ScrollTopButton from "@/components/basic/button/ScrollTopButton";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
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
				{children}
				<Footer />
			</body>
		</html>
	);
}
