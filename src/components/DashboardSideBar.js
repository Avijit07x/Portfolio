const DashboardSideBar = ({ handleTabClick, selectedTab }) => {
	return (
		<>
			<div className="space-y-3 overflow-y-hidden text-center font-medium text-white">
				<h1 className="rounded-lg bg-green-500 py-1 text-white">Add Section</h1>
				<ul className="space-y-5">
					<li
						className={
							selectedTab === "addAdmin"
								? "rounded-lg bg-white py-1 text-black"
								: ""
						}
					>
						<button onClick={() => handleTabClick("addAdmin")}>
							Add Admin
						</button>
					</li>
					<li
						className={
							selectedTab === "addProject"
								? "rounded-lg bg-white py-1 text-black"
								: ""
						}
					>
						<button onClick={() => handleTabClick("addProject")}>
							Add Project
						</button>
					</li>
					<li
						className={
							selectedTab === "addTools"
								? "rounded-lg bg-white py-1 text-black"
								: ""
						}
					>
						<button onClick={() => handleTabClick("addTools")}>
							Add Tools
						</button>
					</li>
				</ul>
				<h1 className="rounded-lg bg-red-500 py-1 text-white">
					Delete Section
				</h1>
				<ul className="space-y-5">
					<li
						className={
							selectedTab === "deleteTools"
								? "rounded-lg bg-white py-1 text-black"
								: ""
						}
					>
						<button onClick={() => handleTabClick("deleteTools")}>
							Delete Tools
						</button>
					</li>
				</ul>
			</div>
		</>
	);
};

export default DashboardSideBar;
