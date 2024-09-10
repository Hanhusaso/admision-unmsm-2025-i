// import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";

// const geistSans = localFont({
// 	src: "./fonts/GeistVF.woff",
// 	variable: "--font-geist-sans",
// 	weight: "100 900",
// });
// const geistMono = localFont({
// 	src: "./fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });

const openSans = Open_Sans({
	subsets: ["latin"],
	variable: "--font-open-sans",
	weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
	title: "Admision UNMSM 2025-I",
	description: "Admision UNMSM 2025-I",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body
				className={`${openSans.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
