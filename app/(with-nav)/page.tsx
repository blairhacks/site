"use client";
import React from "react";
import Timeline from "../../components/Timeline";
import { motion } from "framer-motion";
import Link from "next/link";

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
          An annual hackathon hosted by students at MBHS and other schools in
          Montgomery County, MD.
        </motion.p>
      </div>
      <p className="pb-2 text-sm text-neutral-300">
        Stay tuned for our next hackathon, coming spring 2026!
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
        className="rounded-lg p-5 bg-violet-500 mb-10 w-full md:w-96 text-black"
      >
        <h2 className="font-semibold text-xl">
          <Link href="" target="blank">
            DCHacks
          </Link>
        </h2>
        <p>Fall 2025, Date TBD</p>
        <p>DC Metro Area, Location TBD</p>
        <Link
          href="https://www.dchacks.org"
          target="_blank"
          rel="noreferrer noopener"
          className="w-max"
        >
          <button className="px-4 py-2 bg-black text-white rounded-xl text-lg font-extrabold mt-6 w-max">
            Learn More
          </button>
        </Link>
      </motion.div>
      <Timeline />
    </div>
  );
}
