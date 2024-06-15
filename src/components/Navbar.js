"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HomeIcon from "./icons/Homeicon";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.nav
			initial={{ y: 50, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			className="flex items-center justify-between backdrop-filter bg-opacity-20 backdrop-blur-sm lg:px-4 w-full fixed top-0"
		>
			<div>
				<Image
					src="/logo.png"
					alt="logo"
					width={80}
					height={80}
					quality={100}
					className="w-14 h-14  lg:w-16 lg:h-16"
				/>
			</div>
			<div className=" mr-4">
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
