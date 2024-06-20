"use client";

import { motion } from "framer-motion";
import LanguagesTools from "./LanguagesTools";

const AnimatedLanguagesTools = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ ease: "easeInOut", duration: 0.7 }}
		>
			<LanguagesTools />
		</motion.div>
	);
};

export default AnimatedLanguagesTools;
