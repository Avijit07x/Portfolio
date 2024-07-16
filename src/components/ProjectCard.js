"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
	console.log(project);
	return (
		<>
			<motion.div
				initial={{ opacity: 0, x: 100 }}
				transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className="mx-auto mt-10 flex w-full flex-col items-center justify-between gap-3 rounded-lg bg-white p-5 shadow-lg lg:h-[350px] lg:w-4/5 lg:flex-row lg:p-14"
			>
				<div className="order-1 space-y-4 lg:w-2/3 lg:pr-10">
					<h1 className="text-2xl font-semibold text-primary">
						{project.title}
					</h1>
					<p className="">{project.description}</p>
					<p className="flex flex-wrap items-center gap-3 text-primary">
						<h2 className="font-medium">Tools :</h2>
						{project.tags.map((tag, index) => (
							<span key={index} className="text-sm">
								{tag}
							</span>
						))}
					</p>
					<div className="flex gap-4">
						<Link
							href={project.github_url}
							target="_blank"
							className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors hover:bg-primary/90"
						>
							Github
						</Link>
						<Link
							href={project.live_url}
							target="_blank"
							className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors hover:bg-primary/90"
						>
							Demo
						</Link>
					</div>
				</div>
				<div className="relative h-48 w-72 shadow-md lg:order-2 lg:h-[15rem] lg:w-[28rem]">
					<Image
						src={project.image_url}
						alt={project.title}
						fill
						objectFit="cover"
						objectPosition="top"
					/>
				</div>
			</motion.div>
		</>
	);
};

export default ProjectCard;
