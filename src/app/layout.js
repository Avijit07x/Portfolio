import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Avijit Dey - Web Developer Portfolio | Projects & Skills Showcase",
	description:
		"Welcome to Avijit Dey's portfolio! Explore my projects, skills, and professional journey. Built with Next.js, this site showcases my work in web development, programming, and design.",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className="scrollbar-thin
		 "
		>
			<body className={`${inter.className} bg-white`}>
				<div className="absolute top-0 z-[-2] h-full w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(46,196,182,0.3),rgba(255,255,255,0))]"></div>
				{children}
			</body>
		</html>
	);
}
