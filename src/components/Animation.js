"use client";

import { motion } from "framer-motion";

const Animation = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 1 }}
		>
			{children}
		</motion.div>
	);
};

export default Animation;
