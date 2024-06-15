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
				<div className="absolute top-0 -z-50 h-full w-full bg-white ">
					<div className="absolute bottom-auto left-auto right-0 top-0 h-[450px] w-[400px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#54ecdd64] opacity-50 blur-[80px]"></div>
				</div>
				{children}
			</body>
		</html>
	);
}
