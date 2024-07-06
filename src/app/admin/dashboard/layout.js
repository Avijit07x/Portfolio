import Dashboard from "@/components/Dashboard";
import { auth } from "@/lib/auth";

const Layout = async ({ children }) => {
	const session = await auth();

	return (
		<div className="relative h-screen w-full bg-white">
			<Dashboard session={session} children={children} />
		</div>
	);
};

export default Layout;
