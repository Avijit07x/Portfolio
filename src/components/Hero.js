"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 1 }}
			className="w-full flex lg:flex-row flex-col-reverse lg:justify-between xl:gap-20 items-center xl:mt-10"
		>
			<div className="space-y-4 lg:w-1/2 text-center lg:text-left">
				<h1 className="text-4xl lg:text-5xl font-medium">
					Hello, <br /> I&#39;m{" "}
					<span className="text-primary">Avijit Dey.</span>
				</h1>
				<p className="font-semibold">
					<span className="text-primary">{"{ "}</span>Front-End Web Developer
					<span className="text-primary">{" }"}</span>
				</p>
				<p className="text-sm lg:text-base">
					I love turning complex problems into simple, beautiful, and intuitive
					designs. My focus is on developing products that make life simpler and
					more efficient. I enjoy collaborating with teams to transform complex
					requirements into elegant, user-centric interfaces.
				</p>
				<Link href="#contact">
					<button className="btn border border-primary px-3 py-1 rounded-lg btn-wide font-medium mt-4">
						Contact Me
					</button>
				</Link>
			</div>
			<div className="relative lg:w-1/2 lg:flex justify-end items-center">
				{/* web developer capsule */}
				<span className="hidden xl:inline bg-white px-3 py-1 font-medium rounded-full shadow-md relative w-[10rem] -top-44 left-44 text-center">
					Web Developer
				</span>
				{/* javascript icon */}
				<motion.div
					initial={{ opacity: 0.5 }}
					animate={{ opacity: [0, 1, 0] }}
					transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
					className="relative w-[1.8rem] h-[1.8rem] lg:top-[6rem] lg:left-20 top-10"
				>
					<Image src="/js.png" alt="logo" fill quality={100} />
				</motion.div>
				{/* react icon */}
				<div className="relative w-[1.8rem] h-[1.8rem] top-52 left-52 lg:-top-44 lg:left-[23rem] animate-spin-slow">
					<Image className="" src="/react.png" alt="logo" fill quality={100} />
				</div>
				{/* next-js icon */}
				<div className=" hidden lg:block relative w-[3rem] h-[1.8rem] top-32  left-80 animate-ping-slow">
					<Image src="/next-js.png" alt="logo" fill quality={100} />
				</div>
				{/* face */}
				<div className="relative h-60 w-60 lg:h-[400px] lg:w-[400px]">
					<Image className="animate-float" src="/face.png" alt="logo" fill />
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
