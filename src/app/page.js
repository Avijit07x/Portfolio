import BottomMenuBar from "@/components/BottomMenuBar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Page = () => {
	return (
		<>
			<Navbar />
			<main className="pt-16 lg:pt-40 px-4 lg:px-32">
				<Hero />
			</main>
			<BottomMenuBar />
		</>
	);
};

export default Page;
