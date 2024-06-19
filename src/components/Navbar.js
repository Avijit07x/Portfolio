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
				whileInView={{
					y: 0,
					opacity: 1,
					transition: { duration: 0.8 },
				}}
				className="fixed top-0 z-10 flex w-full items-center justify-between bg-opacity-20 backdrop-blur-sm backdrop-filter lg:px-10"
			>
				<div className="relative h-14 w-14 lg:h-16 lg:w-16">
					<Image
						src="/logo.png"
						alt="logo"
						fill
						quality={100}
						sizes="(100vw, 100vh)"
					/>
				</div>
				<div className="mr-5 hidden lg:block">
					<ul className="flex gap-8 text-base font-medium lg:font-semibold">
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
					className="mr-4 lg:hidden"
				/>
			</motion.nav>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
						className="fixed right-0 top-0 z-20 h-screen w-3/5 bg-white/50 p-5 backdrop-blur-md backdrop-filter lg:hidden"
					>
						<CancelIcon onClick={() => setIsOpen(!isOpen)} />
						<ul className="mt-10 flex flex-col items-center justify-center gap-4 text-base font-semibold text-primary lg:font-semibold">
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
