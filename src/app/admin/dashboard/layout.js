import DashboardSideBar from "@/components/DashboardSideBar";
import { HandleSingOut } from "@/lib/actions";
import { auth } from "@/lib/auth";
import Link from "next/link";

const Layout = async ({ children }) => {
	const session = await auth();

	return (
		<div className="relative h-screen w-full bg-white">
			<nav className="fixed left-0 top-0 z-10 flex h-[3.5rem] w-full items-center justify-between bg-blue-500 px-10 py-3 font-medium text-white">
				<Link href={"/admin/dashboard"} className="text-xl font-semibold">
					Dashboard
				</Link>
				<div className="flex items-center gap-9">
					<Link href={"/"}>Home</Link>
					{session?.user && (
						<form action={HandleSingOut}>
							<button
								className="rounded-lg bg-white px-2 py-1 text-sm text-black"
								type="submit"
							>
								Sign Out
							</button>
						</form>
					)}
				</div>
			</nav>
			<div className="relative flex w-full pt-[3.5rem]">
				<div className="fixed z-10 h-full w-[15%] bg-blue-500">
					<DashboardSideBar />
				</div>
				<div className="ml-[15%] h-full w-full">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
