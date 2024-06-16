import BottomMenuBar from "@/components/BottomMenuBar";
import Hero from "@/components/Hero";
import MyExpertise from "@/components/MyExpertise";
import Navbar from "@/components/Navbar";

const Page = () => {
	return (
		<>
			<Navbar />
			<main className="pt-16 lg:pt-36 px-4 lg:px-24 xl:px-36">
				<Hero />
				<MyExpertise />
			</main>
			<BottomMenuBar />
		</>
	);
};

export default Page;
