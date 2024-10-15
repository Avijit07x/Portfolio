"use client";

import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LanguagesTools from "@/components/LanguagesTools";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";
import Lenis from "lenis";
import { useEffect, useState } from "react";

const Page = () => {

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const lenis = new Lenis({
			ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			smoothTouch: true,
			limitRange: true,
		});
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	});
	

	return (
		<div className="antialiased">
			<header>
				<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
			</header>
			<div onClick={() => setIsOpen(false)}>
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
