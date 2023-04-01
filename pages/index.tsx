import React from "react";
import Timeline from "../components/Timeline";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="h-full">
			<div className="pb-8">
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
			{/* Card for BH6 */}
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
				style={{ backgroundColor: "#D4AF37" }}
				className="rounded-lg p-5 mb-10 w-full md:w-96 text-black"
			>
				<h2 className="font-semibold text-xl">
					<a href="https://6.blairhacks.com" target="blank">
						BlairHacks_6
					</a>
				</h2>
				<time>March 25-26, </time>
				<time>10 AM to 6 PM</time>
				<a href="https://goo.gl/maps/jMyUCS3fzMaLHzmg7" target="blank">
					<p>@ Virtual + Montgomery College Rockville</p>
				</a>
				<a
					href="https://6.blairhacks.com"
					target="_blank"
					rel="noreferrer noopener"
					className="w-max"
				>
					<button className="px-4 py-2 bg-black text-white rounded-xl text-lg font-extrabold mt-6 w-max">
						Register
					</button>
				</a>
			</motion.div> */}
			<Timeline />
		</div>
	);
}
