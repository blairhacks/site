import React, { useState, useEffect } from "react";
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
		name: "MLH Pizza Fund",
		link: "https://mlh.gitbook.io/major-league-hacking-pizza-fund/GXukjsbPHOyBplCPibsj/",
		image: "/assets/mlh.png",
	},
	{
		name: "MoCo Community Use of Pubic Facilities",
		link: "https://www.montgomerycountymd.gov/cupf/",
		image: "/assets/cupf.png",
	},
];

export default function Sponsors() {
	const [money, setMoney] = useState<number>();

	useEffect(() => {
		fetch("https://bank.hackclub.com/api/v3/organizations/blairhacks", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setMoney(data.balances.balance_cents / 100);
			});
	}, []);

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
				Help us make this hackathon possible
			</motion.p>
			<div className="flex justify-center flex-wrap gap-5 pb-5">
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
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, ease: "linear", delay: 0.4 }}
					className="border-2 border-red-500 rounded-lg p-5 text-white w-full md:w-80"
				>
					<h3 className="font-bold text-lg">
						Our Finances{" "}
						{money && <span className="text-green-400">(${money})</span>}
					</h3>
					<p>
						All our finances are transparent and available thanks to Hack Club
						Bank&apos;s transparency mode.
					</p>
					<a
						href="https://bank.hackclub.com/blairhacks"
						target="blank"
						rel="noreferrer noopener"
						className="w-min"
					>
						<button className="px-4 py-2 bg-red-500 text-black rounded-xl text-lg w-max font-extrabold mt-6 sm:cursor-pointer">
							Our Finances
						</button>
					</a>
				</motion.div>
			</div>
			<motion.h2
				initial={{ scale: 1.05, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.3, ease: "linear", delay: 0.5 }}
				className="font-bold text-center text-3xl mb-5"
			>
				Current Sponsors
			</motion.h2>
			<div className="flex justify-center flex-wrap gap-5">
				{sponsors.map(({ name, link, image, className }, i) => (
					<motion.a
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, ease: "linear", delay: 0.6 + 0.1 * i }}
						href={link}
						target="blank"
						key={i}
						className="w-full sm:w-64"
					>
						<div className="w-full sm:w-64 h-48 p-4 flex justify-center items-center rounded-xl bg-neutral-400/20 transition-all duration-300 border-2 border-red-500 border-opacity-0 hover:border-opacity-100">
							<img src={image} alt={name} className={className} />
						</div>
					</motion.a>
				))}
			</div>
		</div>
	);
}
