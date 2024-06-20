import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Avijit Dey - Web Developer Portfolio | Projects & Skills Showcase",
	description:
		"Welcome to Avijit Dey's portfolio! Explore my projects, skills, and professional journey. Built with Next.js, this site showcases my work in web development, programming, and design.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth scrollbar-thin">
			<body className={`${inter.className} relative`}>
				<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}
