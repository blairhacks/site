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
			{/* Card for BH Mini */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
				className="bg-emerald-500 rounded-lg p-5 mb-10 w-full md:w-96 text-black"
			>
				<h2 className="font-semibold text-xl">
					<a href="https://mini.blairhacks.com" target="blank">
						BlairHacks Mini &apos;22!
					</a>
				</h2>
				<time>Dec 10th, 10:30 AM to 5:30 PM</time>
				<a href="https://g.page/mcplRockvilleMemorial" target="blank">
					<p>@ Rockville Memorial Libary</p>
				</a>
				<a
					href="https://organize.mlh.io/participants/events/8717-blairhacks-mini"
					target="_blank"
					rel="noreferrer noopener"
					className="self-start"
				>
					<div className="px-4 py-2 bg-black text-white rounded-xl text-lg font-extrabold mt-6 w-min">
						Register
					</div>
				</a>
			</motion.div>
			<Timeline />
		</div>
	);
}
