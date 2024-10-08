import ProjectCard from "./ProjectCard";
import ProjectPlaceholder from "./ProjectCardPlaceholder";

const MyWork = ({ projects }) => {
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
					<>
						{Array(3)
							.fill(0)
							.map((_, index) => (
								<ProjectPlaceholder key={index} />
							))}
					</>
				)}
			</div>
		</div>
	);
};

export default MyWork;
