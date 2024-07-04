"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSideBar = () => {
	const pathname = usePathname();
	return (
		<div className="space-y-3 overflow-y-hidden px-5 text-center font-medium text-white">
			<h1 className="rounded-lg bg-green-500 py-1 text-white">Add Section</h1>
			<ul className="space-y-5">
				<li
					className={
						pathname.includes("add-admin")
							? "rounded-lg bg-white py-1 text-black"
							: ""
					}
				>
					<Link href="/admin/dashboard/add-admin">Add Admin</Link>
				</li>
				<li
					className={
						pathname.includes("add-project")
							? "rounded-lg bg-white py-1 text-black"
							: ""
					}
				>
					<Link href="/admin/dashboard/add-project">Add Project</Link>
				</li>
				<li
					className={
						pathname.includes("add-tools")
							? "rounded-lg bg-white py-1 text-black"
							: ""
					}
				>
					<Link href="/admin/dashboard/add-tools">Add Tools</Link>
				</li>
			</ul>
			<h1 className="rounded-lg bg-red-500 py-1 text-white">Delete Section</h1>
			<ul className="space-y-5">
				<li
					className={
						pathname.includes("delete-tools")
							? "rounded-lg bg-white py-1 text-black"
							: ""
					}
				>
					<Link href="/admin/dashboard/delete-tools">Delete Tools</Link>
				</li>
			</ul>
		</div>
	);
};

export default DashboardSideBar;
