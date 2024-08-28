"use client";

import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LanguagesTools from "@/components/LanguagesTools";
import LoadingScreen from "@/components/LoadingScreen";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const Page = () => {
	const [tools, setTools] = useState([]);
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [toolsRes, projectsRes] = await Promise.all([
					fetch(process.env.NEXT_PUBLIC_BASE_URL + "api/tools", {
						headers: {
							"Content-Type": "application/json",
						},
					}),
					fetch(process.env.NEXT_PUBLIC_BASE_URL + "api/projects", {
						headers: {
							"Content-Type": "application/json",
						},
					}),
				]);

				const toolsData = await toolsRes.json();
				const projectsData = await projectsRes.json();

				setTools(toolsData);
				setProjects(projectsData.reverse());
			} catch (error) {
				console.log({ error: error.message });
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <LoadingScreen />;
	}

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className="px-4 lg:px-24 xl:px-36">
				<Hero />
				<LanguagesTools tools={tools} />
				<MyWork projects={projects} />
				<ContactMe />
			</main>
			<Footer />
		</>
	);
};

export default Page;
