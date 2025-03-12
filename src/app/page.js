import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LanguagesTools from "@/components/LanguagesTools";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";

const Page = () => {
	return (
		<div className="antialiased">
			<header>
				<Navbar />
			</header>
			<div>
				<main className="px-4 lg:px-24 xl:px-36">
					<Hero />
					<LanguagesTools />
					<MyWork />
					<ContactMe />
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default Page;
