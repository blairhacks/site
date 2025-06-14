import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { useRouter } from "next/router";
import { MdOutlinePhotoLibrary } from "react-icons/md";

export default function Nav() {
	const router = useRouter();

	return (
		<div className="w-fit">
			<div className="flex md:flex-col gap-2 p-2 text-neutral-500 rounded-lg bg-white/5 border-2 border-neutral-900 backdrop-blur-sm">
				<Image className="w-12" src="/assets/logo.png" alt="BlairHacks Logo" width={48} height={48} />
				<Link href="/">
					<HiOutlineHome
						color={router.pathname === "/" ? "white" : undefined}
						className="h-12 w-12 p-2 rounded-lg hover:bg-neutral-800/50 sm:cursor-pointer"
					/>
				</Link>
				{/* <Link href="/team">
					<AiOutlineTeam
						color={router.pathname === "/team" ? "white" : undefined}
						className="h-12 w-12 p-2 rounded-lg hover:bg-neutral-800/50 sm:cursor-pointer"
					/>
				</Link> */}
				<Link href="/gallery">
					<MdOutlinePhotoLibrary
						color={router.pathname === "/gallery" ? "white" : undefined}
						className="h-12 w-12 p-2 rounded-lg hover:bg-neutral-800/50 sm:cursor-pointer"
					/>
				</Link>
				<Link href="/sponsors">
					<BiDonateHeart
						color={router.pathname === "/sponsors" ? "white" : undefined}
						className="h-12 w-12 p-2 rounded-lg hover:bg-neutral-800/50 sm:cursor-pointer"
					/>
				</Link>
			</div>
		</div>
	);
}
