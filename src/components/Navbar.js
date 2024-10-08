"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CancelIcon from "./icons/CancelIcon";
import MenuIcon from "./icons/Menu";

const Navbar = ({ isOpen, setIsOpen }) => {
	return (
		<>
			<nav className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-white bg-opacity-20 backdrop-blur-sm backdrop-filter lg:px-10">
				<Link href="/">
					<div className="relative h-14 w-14 lg:h-16 lg:w-16">
						<Image
							src="/logo.png"
							alt="logo"
							width={100}
							height={100}
							priority
						/>
					</div>
				</Link>
				<div className="mr-5 hidden lg:block">
					<ul className="flex gap-8 text-base font-medium lg:font-semibold">
						<li>
							<Link
								href="https://www.linkedin.com/in/avijit07x/"
								target="_blank"
							>
								Linkedin
							</Link>
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
			</nav>
			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
						className="fixed right-0 top-0 z-20 h-screen w-3/5 bg-white/50 p-5 backdrop-blur-md backdrop-filter lg:hidden"
					>
						<CancelIcon onClick={() => setIsOpen(!isOpen)} />
						<ul className="mt-10 flex flex-col items-center justify-center gap-4 space-y-1 px-2 text-base font-medium text-primary lg:font-semibold">
							<li className="w-full">
								<Link
									className="inline-block w-full rounded-full bg-primary px-3 py-2 text-center text-white shadow-md"
									href="https://www.linkedin.com/in/avijit07x/"
									target="_blank"
								>
									Linkedin
								</Link>
							</li>
							<li className="w-full">
								<Link
									className="inline-block w-full rounded-full bg-primary px-3 py-2 text-center text-white shadow-md"
									href="https://github.com/Avijit07x"
									target="_blank"
								>
									Github
								</Link>
							</li>
							<li className="w-full">
								<Link
									className="inline-block w-full rounded-full bg-primary px-3 py-2 text-center text-white shadow-md"
									href="https://twitter.com/Avijit07x"
									target="_blank"
								>
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
