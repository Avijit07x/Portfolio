"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FragmentIcon from "./icons/FragmentIcon";
import LaptopProgrammingIcon from "./icons/LaptopProgrammingIcon";
import Link from "next/link";

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 1 }}
			className="flex lg:flex-row flex-col-reverse lg:justify-between items-center"
		>
			<div className="space-y-4 lg:w-1/2 text-center lg:text-left">
				<h1 className="text-4xl lg:text-5xl font-medium">
					Hello, <br /> I'm <span className="text-primary">Avijit Dey.</span>
				</h1>
				<p>
					<span className="text-primary">{"<"}</span> Front-End Web Developer{" "}
					<span className="text-primary">{"/>"}</span>
				</p>
				<p className="text-sm lg:text-base">
					As a frontend developer, I'm passionate about creating more than just
					code. My focus is on developing products that make life simpler and
					more efficient.
				</p>
				<Link href="#contact">
					<button className="btn border border-primary px-3 py-1 rounded-lg btn-wide font-medium mt-4">
						Contact Me
					</button>
				</Link>
			</div>
			<div className="relative">
				{/* web developer capsule */}
				<span className="hidden lg:inline bg-white px-3 py-1 font-medium rounded-full shadow-md absolute top-3 left-3">
					Web Developer
				</span>
				{/* javascript icon */}
				<motion.div
					initial={{ opacity: 0.5 }}
					animate={{ opacity: [0, 1, 0] }}
					transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
					className=" relative w-[1.8rem] h-[1.8rem] lg:top-48 lg:-left-5  top-10"
				>
					<Image className="" src="/js.png" alt="logo" fill quality={100} />
				</motion.div>
				{/* react icon */}
				<div className=" relative w-[1.8rem] h-[1.8rem] top-52 left-52 lg:top-44 lg:left-96 animate-spin-slow">
					<Image className="" src="/react.png" alt="logo" fill quality={100} />
				</div>
				{/* laptop programming icon */}
				<LaptopProgrammingIcon className=" hidden lg:inline absolute top-8 right-5" />
				{/* face */}
				<div className=" relative h-60 w-60  lg:h-[400px] lg:w-[400px] ">
					<Image className="animate-float" src="/face.png" alt="logo" fill />
				</div>
				{/* Next js capsule */}
				<span className="hidden lg:inline bg-white px-3 py-1 font-medium rounded-full shadow-md absolute bottom-7 right-2">
					Next.Js
				</span>
				{/* fragment icon */}
				<FragmentIcon className=" hidden lg:inline absolute bottom-7 left-8" />
			</div>
		</motion.div>
	);
};

export default Hero;
