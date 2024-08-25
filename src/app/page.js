import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LanguagesTools from "@/components/LanguagesTools";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";

export const getServerSideProps = async () => {
	try {
		const [toolsRes, projectsRes, userDataRes] = await Promise.all([
			fetch(process.env.NEXT_PUBLIC_BASE_URL + "api/tools", {
				headers: { "Content-Type": "application/json" },
			}),
			fetch(process.env.NEXT_PUBLIC_BASE_URL + "api/projects", {
				headers: { "Content-Type": "application/json" },
			}),
			fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/user-data`, {
				cache: "force-cache",
				headers: { "Content-Type": "application/json" },
			}),
		]);

		const tools = await toolsRes.json();
		const projects = await projectsRes.json();
		const userData = await userDataRes.json();

		return {
			props: {
				tools,
				projects: projects.reverse(),
				userData: userData[0],
			},
		};
	} catch (error) {
		console.error(error);
		return { props: { tools: [], projects: [], userData: {} } };
	}
};

const Page = ({ tools, projects, userData }) => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className="px-4 lg:px-24 xl:px-36">
				<Hero userData={userData} />
				<LanguagesTools tools={tools} />
				<MyWork projects={projects} />
				<ContactMe />
			</main>
			<Footer />
		</>
	);
};

export default Page;
