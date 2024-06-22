import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LanguagesTools from "@/components/LanguagesTools";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const Page = () => {
	return (
		<>
			<Toaster position="bottom-right" richColors className="hidden lg:block" />
			<Navbar />
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
