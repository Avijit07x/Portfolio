"use client";

import { getTools } from "@/components/LanguagesTools";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

const Page = () => {
	const [tools, setTools] = useState([]);
	const [text, setText] = useState("");

	useEffect(() => {
		getTools().then((data) => {
			setTools(data);
		});
	}, []);

	const handleDelete = async (id, public_id) => {
		try {
			const isOk = confirm("Are you sure?");
			if (!isOk) return;
			const updatedTools = tools.filter((tool) => tool._id !== id);
			setTools(updatedTools);
			const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "api/tools", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id, public_id }),
			});
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.log({ error: error.message });
		}
	};

	const filteredTools = useMemo(() => {
		if (text === "") {
			return tools;
		}
		return tools.filter((tool) =>
			tool.tools_name.toLowerCase().includes(text.toLowerCase()),
		);
	}, [text, tools]);

	const handleSearch = (e) => {
		setText(e.target.value);
	};

	return (
		<div className="w-full">
			<div className="mx-auto space-y-4 p-10 lg:w-3/4">
				<h1 className="text-center text-2xl font-semibold">Delete Tools</h1>
				<input
					onChange={handleSearch}
					placeholder="search tools"
					value={text}
					type="search"
					name="search"
					id="search"
					className="w-full rounded-lg p-2 outline-none ring-1 focus:ring"
				/>
				{filteredTools.map((tool) => (
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
							onClick={() => handleDelete(tool._id, tool.public_id)}
						>
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;
