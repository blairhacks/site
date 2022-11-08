import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const sponsors = [
	{
		name: "MBHS Magnet Foundation",
		link: "https://www.mbhsmagnet.org/",
		image: "/assets/magnet_foundation.png",
		className: "h-full",
	},
	{
		name: "Hack Club x FIRST grant",
		link: "https://hackclub.com/hackathons/grant/",
		image: "/assets/bank_grant.png",
	},
	{
		name: "MoCo Community Use of Pubic Facilities",
		link: "https://www.montgomerycountymd.gov/cupf/",
		image: "/assets/cupf.png",
	},
];

export default function Sponsors() {
	return (
		<div>
			<motion.h1
				initial={{ scale: 1.05, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.3, ease: "linear" }}
				className="text-center text-4xl font-bold pb-3"
			>
				Sponsorship
			</motion.h1>
			<motion.p
				initial={{ scale: 1.05, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.3, ease: "linear", delay: 0.1 }}
				className="text-center pb-5"
			>
				Help us make this Hackathon Possible
			</motion.p>
			<div className="flex flex-wrap gap-5 pb-5">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
					className="border-2 border-red-500 rounded-lg p-5 text-white w-full md:w-80"
				>
					<h3 className="font-bold text-lg">Want to sponsor us?</h3>
					<p>
						Keep BlairHacks accessible to everyone in the community! Contact us
						at team@blairhacks.com.
					</p>
					<Link
						href="/assets/BlairHacks_6 Sponsorship Package.pdf"
						rel="noreferrer noopener"
						className="self-start"
					>
						<div className="px-4 py-2 bg-red-500 text-black rounded-xl text-lg font-extrabold mt-6 w-max sm:cursor-pointer">
							<p>Sponsorship Package</p>
						</div>
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, ease: "linear", delay: 0.3 }}
					className="border-2 border-red-500 rounded-lg p-5 text-white w-full md:w-80"
				>
					<h3 className="font-bold text-lg">Donate Individually</h3>
					<p>
						All contributions are welcome! If you&apos;re interested in donating
						individually click the button below!
					</p>
					<Link href="/donate" rel="noreferrer noopener" className="w-min">
						<div className="px-4 py-2 bg-red-500 text-black rounded-xl text-lg font-extrabold mt-6 w-max sm:cursor-pointer">
							Donate
						</div>
					</Link>
				</motion.div>
			</div>
			<motion.h2
				initial={{ scale: 1.05, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.3, ease: "linear", delay: 0.4 }}
				className="font-bold text-center text-3xl mb-5"
			>
				Current Sponsors
			</motion.h2>
			<div className="flex flex-wrap gap-5">
				{sponsors.map(({ name, link, image, className }, i) => (
					<motion.a
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, ease: "linear", delay: 0.5 + 0.1 * i }}
						href={link}
						target="blank"
						key={i}
					>
						<div className="w-64 h-48 p-4 flex justify-center items-center rounded-xl bg-neutral-400/20 transition-all duration-300 border-2 border-red-500 border-opacity-0 hover:border-opacity-100">
							<img src={image} alt={name} className={className} />
						</div>
					</motion.a>
				))}
			</div>
		</div>
	);
}
