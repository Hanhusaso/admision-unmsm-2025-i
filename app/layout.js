import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const greatScape = localFont({
	src: "./fonts/GreatEscapeW00Black.ttf",
	variable: "--font-great-scape",
	weight: "100 900",
});

const openSans = Open_Sans({
	subsets: ["latin"],
	variable: "--font-open-sans",
	weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
	title: "Admision UNMSM 2025-I",
	description: "Landing Page del Exámen de Admisión UNMSM 2025-I",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body
				className={`${openSans.variable} ${greatScape.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
