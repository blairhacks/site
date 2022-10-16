import React from "react";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";

export default function Nav() {
	return (
		<div className="w-fit">
			<div className="p-2 text-gray-500 rounded-lg bg-gray-900">
				<Link href="/">
					<img
						className="w-12 cursor-pointer"
						src="/assets/logo.png"
						alt="BlairHacks Logo"
					/>
				</Link>
				<Link href="/">
					<HiOutlineHome className="h-12 w-12 p-2 rounded-lg cursor-pointer hover:bg-gray-800" />
				</Link>
				<Link href="/team">
					<AiOutlineTeam className="h-12 w-12 p-2 rounded-lg cursor-pointer hover:bg-gray-800" />
				</Link>
				<BiDonateHeart className="h-12 w-12 p-2 rounded-lg cursor-pointer hover:bg-gray-800" />
			</div>
		</div>
	);
}
