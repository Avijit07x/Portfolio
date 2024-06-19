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
			className="flex min-h-dvh w-full flex-col-reverse items-center justify-center lg:flex-row lg:justify-between"
		>
			<div className="space-y-4 text-center lg:w-1/2 lg:text-left">
				<h1 className="text-4xl font-medium lg:text-5xl lg:leading-[3.5rem]">
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
					more efficient.
				</p>
				<div className="space-x-4">
					<Link href="#contact">
						<button className="btn-wide mt-4 rounded-lg border border-primary px-3 py-1 font-medium">
							Contact Me
						</button>
					</Link>
					<Link href="https://drive.google.com/file/d/173OocuWwADpgIVO6FM07Cyjl3xeALMup/view?usp=sharing">
						<button className="btn-wide mt-4 rounded-lg border border-primary px-3 py-1 font-medium">
							My Resume
						</button>
					</Link>
				</div>
				<div className="grid place-items-center lg:place-content-start">
					<motion.div
						animate={{ opacity: 0, y: 10 }}
						transition={{
							duration: 2,
							ease: "easeInOut",
							repeat: Infinity,
							repeatType: "reverse",
						}}
					>
						<Image
							src="/mouse-cursor.png"
							alt="mouse cursor"
							width={40}
							height={40}
							quality={100}
						/>
					</motion.div>
				</div>
			</div>
			<div className="relative items-center justify-end lg:flex">
				{/* web developer capsule */}
				<span className="relative -top-44 left-52 hidden w-[10rem] rounded-full bg-white px-3 py-1 text-center font-medium shadow-md xl:inline">
					Web Developer
				</span>
				{/* javascript icon */}
				<motion.div
					initial={{ opacity: 0.5 }}
					animate={{ opacity: [0, 1, 0] }}
					transition={{
						duration: 6,
						ease: "easeInOut",
						repeat: Infinity,
					}}
					className="relative top-10 h-[1.8rem] w-[1.8rem] lg:left-20 lg:top-[6rem]"
				>
					<Image
						src="/js.png"
						alt="logo"
						fill
						quality={100}
						sizes="(100vw, 100vh)"
					/>
				</motion.div>
				{/* react icon */}
				<div className="relative left-52 top-52 h-[1.8rem] w-[1.8rem] animate-spin-slow lg:-top-44 lg:left-[25rem]">
					<Image
						className=""
						src="/react.png"
						alt="react logo"
						fill
						sizes="(100vw, 100vh)"
						quality={100}
					/>
				</div>
				{/* next-js icon */}
				<div className="relative left-80 top-32 hidden h-[1.8rem] w-[3rem] lg:block">
					<Image
						src="/next-js.png"
						alt="next-js logo"
						fill
						quality={100}
						sizes="(100vw, 100vh)"
					/>
				</div>
				{/* face */}
				<div className="relative h-60 w-60 lg:h-[25rem] lg:w-[25rem]">
					<Image
						className="animate-float"
						src="/face.png"
						alt="face logo"
						fill
						sizes="(100vw, 100vh)"
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
