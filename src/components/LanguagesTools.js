import tools from "@/data/ToolsData";
import Image from "next/image";

const LanguagesTools = () => {
	return (
		<div id="tools" className="w-full py-20">
			<div className="space-y-4">
				<h1 className="w-full text-center text-xs font-bold uppercase lg:text-sm">
					<span className="text-primary">{"{ "}</span>
					My Knowledge Areas
					<span className="text-primary">{" }"}</span>
				</h1>
				<h1 className="w-full text-center text-2xl font-semibold lg:text-4xl">
					<span className="text-primary">{"{ "}</span>
					Languages &#38; Tools
					<span className="text-primary">{" }"}</span>
				</h1>
				<p className="mt-4 text-center text-sm">
					I am skilled in various languages and tools and have a strong drive to
					learn new technologies and stay updated with the latest industry
					trends. <br />
					Right now, I am focusing on learning backend development.
				</p>
			</div>
			<div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-16">
				{tools?.map((tool) => {
					return (
						<div
							key={tool.name}
							className="grid h-20 w-20 cursor-pointer place-items-center rounded-md bg-white drop-shadow-md"
							title={tool.name}
						>
							<Image src={tool.image} alt={tool.name} width={40} height={40} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LanguagesTools;
