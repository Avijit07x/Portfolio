"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
	return (
		<motion.nav
			initial={{ y: 50, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
			className="flex items-center justify-between backdrop-filter bg-opacity-20 backdrop-blur-sm lg:px-10 w-full fixed top-0 z-10"
		>
			<div className=" relative w-14 h-14 lg:w-16 lg:h-16">
				<Image src="/logo.png" alt="logo" fill quality={100} />
			</div>
			<div className="mr-5">
				<ul className="flex gap-4 text-base  font-medium lg:font-semibold">
					<li>
						<Link href="/">Linkedin</Link>
					</li>
					<li>
						<Link href="https://github.com/Avijit07x" target="_blank">
							Github
						</Link>
					</li>
					<li>
						<Link href="https://twitter.com/Avijit07x" target="_blank">
							Twitter
						</Link>
					</li>
				</ul>
			</div>
		</motion.nav>
	);
};

export default Navbar;
