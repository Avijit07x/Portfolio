"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const MyWork = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const getProjects = async () => {
			const res = await fetch(
				process.env.NEXT_PUBLIC_BASE_URL + "api/projects",
			);
			const data = await res.json();
			setProjects(data);
		};
		getProjects();
	}, []);

	return (
		<div className="w-full space-y-4 py-20">
			<h1 className="w-full text-center text-2xl font-semibold lg:text-3xl">
				<span className="text-primary">{"{ "}</span>
				My Projects
				<span className="text-primary">{" }"}</span>
			</h1>
			<p className="mt-4 text-center text-sm">
				Each of these projects highlights a unique aspect of what I can do, from
				problem-solving to creative design. <br className="hidden lg:block" /> I
				am always eager to take on new challenges and expand my horizons.
			</p>
		</div>
	);
};

export default MyWork;
