"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import CancelIcon from "./icons/CancelIcon";
import { useState } from "react";
import MenuIcon from "./icons/Menu";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<motion.nav
				initial={{ y: 50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
				className="flex items-center justify-between backdrop-filter bg-opacity-20 backdrop-blur-sm lg:px-10 w-full fixed top-0 z-10"
			>
				<div className=" relative w-14 h-14 lg:w-16 lg:h-16">
					<Image src="/logo.png" alt="logo" fill quality={100} />
				</div>
				<div className="hidden lg:block mr-5">
					<ul className="flex gap-8 text-base  font-medium lg:font-semibold">
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
				<MenuIcon
					onClick={() => setIsOpen(!isOpen)}
					className="lg:hidden mr-4"
				/>
			</motion.nav>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
						className="lg:hidden w-3/5 p-5 fixed top-0 right-0 h-screen backdrop-filter bg-white/50 backdrop-blur-md z-20"
					>
						<CancelIcon onClick={() => setIsOpen(!isOpen)} />
						<ul className="flex flex-col justify-center items-center gap-4 text-base font-semibold lg:font-semibold mt-10 text-primary">
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
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
