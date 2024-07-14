import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
	console.log(project);
	return (
		<div className="mx-auto flex w-3/4 items-center justify-between bg-white px-14 shadow-lg">
			<div>
				<h1>{project.title}</h1>
				<p>{project.description}</p>
				<Link href={project.github_url} target="_blank">View Project</Link>
			</div>
			<div className="relative h-[12rem] w-[24rem]">
				<Image
					className="h-full w-full"
					src={project.image_url}
					alt={project.title}
					fill
					objectFit="cover"
					objectPosition="top"
				/>
			</div>
		</div>
	);
};

export default ProjectCard;
