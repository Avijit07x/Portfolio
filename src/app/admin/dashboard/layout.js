import Dashboard from "@/components/Dashboard";
import { auth } from "@/lib/auth";

const Layout = async ({ children }) => {
	const session = await auth();

	return (
		<div className="relative w-full bg-white">
			<Dashboard session={session} />
			<div className="w-full lg:ml-[15%] lg:w-[75%] pt-[3.5rem]">{children}</div>
		</div>
	);
};

export default Layout;
