"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_BASE_URL}api/user-data`,
					{ cache: "default" },
				);
				const data = await res.json();
				setUserData(data);
			} catch (error) {
				console.log({ error: error.message });
			}
		};
		getData();
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ ease: "easeInOut", duration: 0.7 }}
			className="flex h-svh w-full flex-col-reverse items-center justify-center lg:h-screen lg:flex-row lg:justify-between"
		>
			<div className="space-y-4 text-center lg:w-1/2 lg:text-left">
				<h1 className="text-4xl font-medium lg:text-5xl lg:leading-[3.5rem]">
					Hello, <br /> I&#39;m{" "}
					<span className="text-primary">{userData?.[0].name}</span>
				</h1>
				<p className="font-semibold">
					<span className="text-primary">{"{ "}</span>
					{userData?.[0].profession}
					<span className="text-primary">{" }"}</span>
				</p>
				<p className="text-sm lg:text-base">{userData?.[0].desc}</p>
				<div className="space-x-4">
					<Link href="#contact">
						<button className="mt-4 rounded-lg border border-primary px-3 py-1 text-sm transition-colors hover:bg-primary hover:text-white lg:text-base lg:font-medium">
							Contact Me
						</button>
					</Link>
					<Link href={`${userData?.[0].resume}`}>
						<button className="mt-4 rounded-lg border border-primary px-3 py-1 text-sm transition-colors hover:bg-primary hover:text-white lg:text-base lg:font-medium">
							My Resume
						</button>
					</Link>
				</div>
				<div className="grid place-items-center lg:place-content-start">
					<motion.div
						animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
						transition={{
							duration: 3,
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
						/>
					</motion.div>
				</div>
			</div>
			<div className="relative items-center justify-end lg:flex">
				<span className="relative -top-44 left-52 hidden w-[10rem] rounded-full bg-white px-3 py-1 text-center font-medium shadow-md xl:inline">
					Web Developer
				</span>
				<motion.div
					animate={{ opacity: [0, 1, 0] }}
					transition={{
						duration: 6,
						ease: "easeInOut",
						repeat: Infinity,
					}}
					className="relative top-10 h-[1.8rem] w-[1.8rem] lg:left-20 lg:top-[6rem]"
				>
					<Image src="/js.png" alt="logo" fill />
				</motion.div>
				<motion.div
					className="relative left-52 top-52 h-[1.8rem] w-[1.8rem] lg:-top-44 lg:left-[25rem]"
					animate={{ rotate: 360 }}
					transition={{
						duration: 10,
						ease: "linear",
						repeat: Infinity,
					}}
				>
					<Image src="/react.png" alt="react logo" fill />
				</motion.div>
				<div className="relative left-80 top-32 hidden h-[1.8rem] w-[3rem] lg:block">
					<Image src="/next-js.png" alt="next-js logo" fill />
				</div>
				<motion.div
					animate={{ y: [0, -20, 0] }}
					transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
					className="relative h-60 w-60 lg:h-[25rem] lg:w-[25rem]"
				>
					<Image
						className="object-contain"
						src="/face.png"
						alt="face logo"
						fill
						priority
					/>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Hero;
