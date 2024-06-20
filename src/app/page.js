import Hero from "@/components/Hero";
import LanguagesTools from "@/components/LanguagesTools";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";

const Page = () => {
	return (
		<>
			<Navbar />
			<main className="px-4 pt-8 lg:px-24 lg:pt-0 xl:px-36">
				<Hero />
				<LanguagesTools />
				<MyWork />
			</main>
		</>
	);
};

export default Page;
