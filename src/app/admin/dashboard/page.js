"use client";
import AddAdmin from "@/components/Admin/AddAdmin";
import AddProject from "@/components/Admin/AddProject";
import AddTools from "@/components/Admin/AddTools";
import DeleteTools from "@/components/Admin/DeleteTools";
import Dashboard from "@/components/Dashboard";
import { useEffect, useState } from "react";

const Page = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [tools, setTools] = useState([]);
	const [selectedTab, setSelectedTab] = useState("addAdmin");
	const components = {
		deleteTools: <DeleteTools tools={tools} setTools={setTools} />,
		addAdmin: <AddAdmin />,
		addProject: <AddProject />,
		addTools: <AddTools />,
	};

	useEffect(() => {
		const getTools = async () => {
			try {
				const res = await fetch(
					process.env.NEXT_PUBLIC_BASE_URL + "api/tools",
					{
						headers: {
							"Content-Type": "application/json",
						},
					},
				);
				const data = await res.json();
				setTools(data);
			} catch (error) {
				console.log({ error: error.message });
				return [];
			}
		};

		getTools();
	}, []);

	const handleTabClick = (tab) => {
		setSelectedTab(tab);
	};
	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<Dashboard
				handleTabClick={handleTabClick}
				selectedTab={selectedTab}
				handleIsOpen={handleIsOpen}
				isOpen={isOpen}
			/>
			<div className="w-full pt-[3.5rem] lg:ml-[15%] lg:w-[75%]">
				{components[selectedTab]}
			</div>
		</div>
	);
};

export default Page;
