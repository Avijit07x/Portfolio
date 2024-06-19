import Hero from "@/components/Hero";
import LanguagesTools from "@/components/LanguagesTools";
import Navbar from "@/components/Navbar";

const Page = () => {
	return (
		<>
			<Navbar />
			<main className="px-4 lg:px-24 xl:px-36">
				<Hero />
				<LanguagesTools />
			</main>
		</>
	);
};

export default Page;
