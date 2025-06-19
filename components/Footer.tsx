import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter, FiGithub, FiYoutube, FiMail } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pb-24 md:pb-8 flex flex-wrap items-center gap-5 justify-between text-black p-8 bg-red-500 px-5 md:px-20">
      <div>
        <div className="flex gap-3 py-2 text-xl items-center">
          <h2 className="text-2xl font-bold">BlairHacks</h2>
          <Link
            href="https://instagram.com/blairhacks"
            target="blank"
            className="duration-200 hover:scale-110"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://twitter.com/blairhacks"
            target="blank"
            className="duration-200 hover:scale-110"
          >
            <FiTwitter />
          </Link>
          <Link
            href="https://github.com/blairhacks"
            target="blank"
            className="duration-200 hover:scale-110"
          >
            <FiGithub />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCMefEBkMD51mlCvy3uGuhaw"
            target="blank"
            className="duration-200 hover:scale-110"
          >
            <FiYoutube />
          </Link>
          <Link
            href="mailto:team@blairhacks.com"
            className="duration-200 hover:scale-110"
          >
            <FiMail />
          </Link>
        </div>
        <p>Fiscally sponsored by The Hack Foundation</p>
        <p>Nonprofit EIN: 81-2908499</p>
      </div>
      <Link href="https://hcb.hackclub.com/dchacks" target="blank">
        <Image
          src="/assets/hcb-logo.svg"
          alt="Hack Club Bank Logo"
          width={120}
          height={60}
          style={{ width: "auto", height: "auto" }}
          unoptimized
        />
      </Link>
    </div>
  );
}
