"use client";

import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LanguagesTools from "@/components/LanguagesTools";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const Page = () => {
	const [tools, setTools] = useState([]);
	const [projects, setProjects] = useState([]);
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		const getTools = async () => {
			try {
				const res = await fetch(
					process.env.NEXT_PUBLIC_BASE_URL + "api/tools",
					{
						headers: {
							"Content-Type": "application/json",
						},
					},
				);
				const data = await res.json();
				setTools(data);
			} catch (error) {
				console.log({ error: error.message });
				return [];
			}
		};
		const getProjects = async () => {
			const res = await fetch(
				process.env.NEXT_PUBLIC_BASE_URL + "api/projects",
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
			const data = await res.json();
			setProjects(data.reverse());
		};
		const getUserData = async () => {
			try {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_BASE_URL}api/user-data`,
					{
						cache: "force-cache",
						headers: {
							"Content-Type": "application/json",
						},
					},
				);
				const data = await res.json();
				setUserData(data[0]);
			} catch (error) {
				console.log({ error: error.message });
			}
		};
		getUserData();
		getTools();
		getProjects();
	}, []);

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className="px-4 lg:px-24 xl:px-36">
				<Hero userData={userData} />
				<LanguagesTools tools={tools} />
				<MyWork projects={projects} />
				<ContactMe />
			</main>
			<Footer />
		</>
	);
};

export default Page;
