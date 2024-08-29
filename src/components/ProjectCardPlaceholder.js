"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const ProjectPlaceholder = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			className="mx-auto mt-10 flex w-full flex-col items-center justify-between gap-3 rounded-lg bg-white p-5 shadow-lg lg:h-[350px] lg:w-4/5 lg:flex-row lg:p-14"
		>
			<div className="order-1 w-full space-y-4 lg:w-2/3 lg:pr-10">
				<div className="h-6 w-1/3 animate-pulse rounded-xl bg-primary/40"></div>
				<div className="h-4 w-full animate-pulse rounded-lg bg-gray-300"></div>
				<div className="h-4 w-5/6 animate-pulse rounded-lg bg-gray-300"></div>

				<div className="mt-2 flex flex-wrap items-center gap-3">
					<div className="h-4 w-12 animate-pulse rounded-lg bg-gray-300"></div>
					<div className="h-4 w-12 animate-pulse rounded-lg bg-gray-300"></div>
					<div className="h-4 w-12 animate-pulse rounded-lg bg-gray-300"></div>
				</div>

				<div className="mt-4 flex gap-4">
					<div className="h-8 w-20 animate-pulse rounded-full bg-primary/40"></div>
					<div className="h-8 w-20 animate-pulse rounded-full bg-primary/40"></div>
				</div>
			</div>

			<div className="relative grid h-48 w-72 place-items-center shadow-md lg:order-2 lg:h-[15rem] lg:w-[28rem]">
				<Image
					className="h-16 w-16 animate-pulse rounded-md object-cover"
					src="/image.svg"
					alt="Loading..."
					width={100}
					height={100}
				/>
			</div>
		</motion.div>
	);
};

export default ProjectPlaceholder;
