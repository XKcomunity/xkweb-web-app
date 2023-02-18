import "./globals.scss";

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head></head>
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}
