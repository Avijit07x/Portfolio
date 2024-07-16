import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Avijit Dey - Web Developer Portfolio | Projects & Skills Showcase",
	description:
		"Welcome to my world of code and design! Explore my projects, skills, and journey as a developer and creator.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<meta
				name="google-site-verification"
				content="GK-i-SrOMyVSmwQQuEQiEtKGzhiCA9f1AgZT-nB0TMw"
			/>
			<body className={`${inter.className} relative`}>
				<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
				{children}
			</body>
		</html>
	);
}
