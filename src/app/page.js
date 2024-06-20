import Animation from "@/components/Animation";
import Hero from "@/components/Hero";
import LanguagesTools from "@/components/LanguagesTools";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";

const Page = () => {
	return (
		<>
			<Navbar />
			<main className="mt-8 px-4 lg:px-24 lg:pt-0 xl:px-36">
				<Hero />
				<Animation>
					<LanguagesTools />
				</Animation>
				<MyWork />
			</main>
		</>
	);
};

export default Page;
