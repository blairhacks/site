import React from "react";
import { motion } from "framer-motion";

export default function gallery() {
	return (
		<div>
			<motion.h1
				initial={{ scale: 1.05, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.3, ease: "linear" }}
				className="text-center text-4xl font-bold pb-5"
			>
				Gallery
			</motion.h1>
			<div className="flex flex-wrap gap-3">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, ease: "linear", delay: 0.1 }}
					className="w-full md:w-96 relative hover:scale-105 transition-all duration-300 ease-in-out sm:cursor-pointer"
				>
					<a
						href="https://cloud.tinu.tech/index.php/s/MdcRiKCw3SQzniw"
						target="blank"
					>
						<img
							src="https://cloud.tinu.tech/index.php/apps/files_sharing/publicpreview/MdcRiKCw3SQzniw?file=/IMG_0896.JPG&fileId=387484&x=1920&y=1080&a=true"
							alt="BH Mini '22"
							className="rounded-lg"
						/>
					</a>
					<div className="absolute bottom-0 py-2 rounded-b-lg w-full text-black text-center bg-white bg-opacity-40 backdrop-blur-md">
						<p>BlairHacks Mini &apos;22</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
