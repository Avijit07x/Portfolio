import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
			viewport={{ once: true }}
			className="mt-5 flex w-full flex-col-reverse items-center justify-center lg:h-screen lg:flex-row lg:justify-between"
			style={{ willChange: "transform, opacity" }}
		>
			<div className="space-y-4 text-center lg:w-1/2 lg:text-left">
				<h1 className="text-4xl font-medium lg:text-5xl lg:leading-[3.5rem]">
					Hello, <br /> I&#39;m <span className="text-primary">Avijit Dey</span>
				</h1>
				<p className="font-semibold">
					<span className="text-primary">{"{ "}</span>
					Front-End Web Developer
					<span className="text-primary">{" }"}</span>
				</p>
				<p className="text-sm lg:text-base">
					I love turning complex problems into simple, beautiful, and intuitive
					designs. My focus is on developing products that make life simpler and
					more efficient.
				</p>
				<div className="space-x-4">
					<Link href="#contact">
						<button className="rounded-full border border-primary bg-primary px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-primary">
							Contact Me
						</button>
					</Link>

					<Link
						href={
							"https://drive.google.com/file/d/173OocuWwADpgIVO6FM07Cyjl3xeALMup/view"
						}
					>
						<button className="rounded-full border border-primary bg-primary px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-primary">
							My Resume
						</button>
					</Link>
				</div>
				<div className="grid place-items-center lg:place-content-start">
					<div className="animate-bounceSlowFade">
						<Image
							src="/mouse-cursor.png"
							alt="mouse cursor"
							width={40}
							height={40}
						/>
					</div>
				</div>
			</div>
			<div className="relative items-center justify-end lg:flex">
				<span className="relative -top-44 left-52 hidden w-[10rem] rounded-full bg-white px-3 py-1 text-center font-medium shadow-md xl:inline">
					Web Developer
				</span>
				<div className="relative top-10 h-[1.8rem] w-[1.8rem] animate-fadeInOut lg:left-20 lg:top-[6rem]">
					<Image src="/js.png" alt="logo" height={45} width={45} />
				</div>
				<div className="relative left-52 top-52 h-[1.8rem] w-[1.8rem] animate-spinSlow lg:-top-44 lg:left-[25rem]">
					<Image
						className="object-contain"
						src="/react.png"
						alt="react logo"
						height={40}
						width={40}
						quality={100}
					/>
				</div>
				<div className="relative left-[22rem] top-32 hidden h-[3rem] w-[3rem] lg:block">
					<Image
						className="object-contain"
						src="/next-js.png"
						alt="next-js logo"
						height={40}
						width={40}
					/>
				</div>
				<div className="relative h-60 w-60 animate-bounceSlow lg:h-[25rem] lg:w-[25rem]">
					<Image
						className="object-contain"
						src="/face.png"
						alt="face logo"
						height={400}
						width={400}
						quality={75}
						sizes="(max-width: 1024px) 240px, 400px"
						priority
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
