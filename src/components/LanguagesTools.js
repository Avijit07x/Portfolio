"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export const getTools = async () => {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "api/tools");
		const data = await res.json();
		return data;
	} catch (error) {
		console.log({ error: error.message });
	}
};
const LanguagesTools = () => {
	const [tools, setTools] = useState([]);

	useEffect(() => {
		getTools().then((data) => {
			setTools(data);
		});
	}, []);

	return (
		<div className="mt-32 w-full">
			<div className="space-y-4">
				<h1 className="w-full text-center text-xs font-bold uppercase lg:text-sm">
					<span className="text-primary">{"{ "}</span>
					My Knowledge Areas
					<span className="text-primary">{" }"}</span>
				</h1>
				<h1 className="w-full text-center text-2xl font-semibold lg:text-3xl">
					<span className="text-primary">{"{ "}</span>
					Languages &#38; Tools
					<span className="text-primary">{" }"}</span>
				</h1>
				<p className="mt-4 text-center text-sm">
					I am skilled in various languages and tools and have a strong drive to
					learn new technologies and stay updated with the latest industry
					trends. <br />
					Currently, my focus is on deepening my expertise in backend
					development, exploring new frameworks and technologies to enhance my
					capabilities.
				</p>
			</div>
			<div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-16">
				{tools &&
					tools?.map((tool) => {
						return (
							<div
								key={tool._id}
								className="grid h-20 w-20 cursor-pointer place-items-center rounded-md bg-white drop-shadow-md"
								title={tool.tools_name}
							>
								<Image
									src={tool.image_url}
									alt={tool.tools_name}
									width={40}
									height={40}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default LanguagesTools;
