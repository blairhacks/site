import React from "react";
import Timeline from "../components/Timeline";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="h-full">
			<div className="pb-8 md:pb-12">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, ease: "linear" }}
					className="font-bold text-4xl md:text-7xl"
				>
					BlairHacks
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, ease: "linear", delay: 0.1 }}
					className="text-sm md:text-xl"
				>
					An annual hackathon hosted by MBHS students in Silver Spring, MD.
				</motion.p>
			</div>
			<Timeline />
		</div>
	);
}
