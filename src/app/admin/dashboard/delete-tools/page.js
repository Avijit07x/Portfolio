"use client";

import { getTools } from "@/components/LanguagesTools";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
	const [tools, setTools] = useState([]);
	useEffect(() => {
		getTools().then((data) => {
			setTools(data);
		});
	}, []);
	const handleDelete = async (id) => {
		try {
			const isOk = confirm("Are you sure?");
			if (!isOk) return;
			const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "api/tools", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: id }),
			});
			const data = await res.json();
			console.log(data);
			const tools = await getTools();
			setTools(tools);
		} catch (error) {
			console.log({ error: error.message });
		}
	};

	return (
		<div className="w-full">
			<div className="mx-auto space-y-4 p-10 lg:w-3/4">
				<h1 className="text-center text-2xl font-semibold">Delete Tools</h1>

				{tools &&
					tools.map((tool) => {
						return (
							<div
								key={tool._id}
								className="flex items-center justify-between gap-4 rounded-lg bg-white p-2 shadow-lg"
							>
								<div className="flex items-center gap-2">
									<Image
										src={tool.image_url}
										alt={tool.tools_name}
										width={30}
										height={30}
									/>
									<h1>{tool.tools_name}</h1>
								</div>
								<button
									className="rounded-lg bg-red-500 px-2 py-1 text-sm text-white"
									onClick={() => {
										handleDelete(tool._id);
									}}
								>
									Delete
								</button>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Page;
