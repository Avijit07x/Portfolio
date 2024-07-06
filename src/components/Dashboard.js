"use client";
import DashboardSideBar from "@/components/DashboardSideBar";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "./icons/Menu";
import { HandleSingOut } from "@/lib/actions";
const Dashboard = ({ session }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav className="fixed left-0 top-0 z-10 flex h-[3.5rem] w-full items-center justify-between bg-blue-500 px-4 py-3 font-medium text-white lg:px-10">
				<Link href={"/admin/dashboard"} className="text-xl font-semibold">
					Dashboard
				</Link>
				<div className="flex items-center gap-5">
					{session?.user && (
						<form action={HandleSingOut}>
							<button
								className="w-full rounded-lg bg-white px-2 py-1 text-sm text-black"
								type="submit"
							>
								Sign Out
							</button>
						</form>
					)}
					<div className="lg:hidden">
						<MenuIcon
							className="text-white"
							onClick={() => setIsOpen(!isOpen)}
						/>
					</div>
				</div>
			</nav>
			<div
				className={`fixed h-full w-3/5 bg-blue-500 px-5 pt-[3.9rem] transition-all duration-300 ease-in-out ${isOpen ? "left-0 opacity-100" : "-left-full opacity-0"} lg:left-0 lg:w-[15%] lg:opacity-100`}
			>
				<DashboardSideBar session={session} />
			</div>
		</>
	);
};

export default Dashboard;
