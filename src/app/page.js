import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LanguagesTools from "@/components/LanguagesTools";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";

const Page = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className="px-4 lg:px-24 xl:px-36">
				<Hero />
				<LanguagesTools />
				<MyWork />
				<ContactMe />
			</main>
			<Footer />
		</>
	);
};

export default Page;
