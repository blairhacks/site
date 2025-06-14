import React from "react";
import Image from "next/image";
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
			<div className="flex flex-wrap gap-5">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, ease: "linear", delay: 0.1 }}
					className="w-full md:w-96 relative hover:scale-[1.02] transition-all duration-300 ease-in-out sm:cursor-pointer"
				>
					<a href="https://photos.app.goo.gl/NabaQgWSoi224WE57" target="blank">
						<Image src="/assets/bh6.jpg" alt="BH6" className="rounded-lg" width={384} height={256} />
					</a>
					<div className="absolute bottom-0 py-2 rounded-b-lg w-full text-black text-center bg-white/40 backdrop-blur-md">
						<p>BlairHacks_6</p>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
					className="w-full md:w-96 relative hover:scale-[1.02] transition-all duration-300 ease-in-out sm:cursor-pointer"
				>
					<a href="https://photos.app.goo.gl/uEDYgtAcorm3sxcLA" target="blank">
						<Image
							src="/assets/bhmini22.jpg"
							alt="BH Mini '22"
							className="rounded-lg"
							width={384}
							height={256}
						/>
					</a>
					<div className="absolute bottom-0 py-2 rounded-b-lg w-full text-black text-center bg-white/40 backdrop-blur-md">
						<p>BlairHacks Mini &apos;22</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
