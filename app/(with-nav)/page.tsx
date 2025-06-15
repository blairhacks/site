"use client";
import React from "react";
import Timeline from "../../components/Timeline";
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
      <p className="pb-2 text-sm text-neutral-300">Our friends at poolesville_hacks present</p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
        className="rounded-lg p-5 bg-violet-500 mb-10 w-full md:w-96 text-black"
      >
        <h2 className="font-semibold text-xl">
          <a href="https://poolesvillehacks.tech/" target="blank">
            poolesville_hacks 2
          </a>
        </h2>
        <time>April 15th, </time>
        <time>9 AM to 8:30 PM</time>
        <a href="https://goo.gl/maps/yB9A392f4qEFWDD49" target="blank">
          <p>@ Poolesville Baptist Chruch</p>
        </a>
        <a
          href="https://organize.mlh.io/participants/events/8630-poolesville_hacks-2"
          target="_blank"
          rel="noreferrer noopener"
          className="w-max"
        >
          <button className="px-4 py-2 bg-black text-white rounded-xl text-lg font-extrabold mt-6 w-max">
            Register
          </button>
        </a>
      </motion.div>
      <Timeline />
    </div>
  );
}
