import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter, FiGithub, FiYoutube, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="pb-24 md:pb-8 flex flex-wrap items-center gap-5 justify-between text-black p-8 bg-red-500 px-5 md:px-20">
      <div>
        <div className="flex gap-3 py-2 text-xl items-center">
          <h2 className="text-2xl font-bold">BlairHacks</h2>
          <a
            href="https://instagram.com/blairhacks"
            target="blank"
            className="duration-200 hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/blairhacks"
            target="blank"
            className="duration-200 hover:scale-110"
          >
            <FiTwitter />
          </a>
          <a
            href="https://github.com/blairhacks"
            target="blank"
            className="duration-200 hover:scale-110"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMefEBkMD51mlCvy3uGuhaw"
            target="blank"
            className="duration-200 hover:scale-110"
          >
            <FiYoutube />
          </a>
          <a
            href="mailto:team@blairhacks.com"
            className="duration-200 hover:scale-110"
          >
            <FiMail />
          </a>
        </div>
        <p>Fiscally sponsored by The Hack Foundation</p>
        <p>Nonprofit EIN: 81-2908499</p>
      </div>
      <a href="https://bank.hackclub.com/blairhacks" target="blank">
        <Image
          src="/assets/hcb-logo.svg"
          alt="Hack Club Bank Logo"
          width={120}
          height={60}
          style={{ width: "auto", height: "auto" }}
          unoptimized
        />
      </a>
    </div>
  );
}
