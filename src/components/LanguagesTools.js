import tools from "@/data/ToolsData";
import Image from "next/image";

const LanguagesTools = () => {
	return (
		<div id="tools" className="pt-16 lg:pt-48 w-full pb-48">
			<div className="space-y-4">
				<h1 className="font-bold text-xs lg:text-sm text-center w-full uppercase">
					<span className="text-primary">{"{ "}</span>
					My Knowledge Areas
					<span className="text-primary">{" }"}</span>
				</h1>
				<h1 className="font-semibold text-2xl lg:text-4xl text-center w-full">
					<span className="text-primary">{"{ "}</span>
					Languages &#38; Tools
					<span className="text-primary">{" }"}</span>
				</h1>
				<p className="text-center text-sm mt-4">
					I am skilled in various languages and tools and have a strong drive to
					learn new technologies and stay updated with the latest industry
					trends. <br />
					Right now, I am focusing on learning backend development.
				</p>
			</div>
			<div className="flex gap-4 flex-wrap justify-center items-center mt-10 lg:mt-16">
				{tools?.map((tool) => {
					return (
						<div
							key={tool.name}
							className="w-20 h-20 bg-white drop-shadow-md grid place-items-center rounded-md cursor-pointer"
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
