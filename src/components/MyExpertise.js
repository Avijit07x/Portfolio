import tools from "@/lib/ToolsData";
import Image from "next/image";

const MyExpertise = () => {
	return (
		<div id="tools" className="pt-16 lg:pt-48 w-full pb-48">
			<div>
				<h1 className="font-semibold text-sm text-center w-full uppercase">
					<span className="text-primary">{"< "}</span>
					My Knowledge Areas
					<span className="text-primary">{" />"}</span>
				</h1>
				<h1 className="font-semibold text-4xl text-center w-full">
					<span className="text-primary">{"< "}</span>
					Languages & Tools
					<span className="text-primary">{" />"}</span>
				</h1>
				<p className="text-center text-sm mt-4">
					I am proficient in a variety of languages and tools, and I am
					continually motivated to learn new technologies and keep abreast of
					the latest industry developments.
				</p>
			</div>
			<div className="flex gap-4 flex-wrap justify-center items-center mt-20">
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

export default MyExpertise;
