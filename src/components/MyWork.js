"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { MoonLoader } from "react-spinners";

const MyWork = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
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
		getProjects();
	}, []);

	return (
		<div className="w-full space-y-4 overflow-x-hidden py-20">
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

			<div>
				{projects && projects.length !== 0 ? (
					projects.map((project) => (
						<ProjectCard key={project._id} project={project} />
					))
				) : (
					<div className="mt-10 flex items-center justify-center gap-2">
						<MoonLoader
							color="#ef4e19"
							loading
							size={18}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
						<p className="text-center">Loading...</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default MyWork;
