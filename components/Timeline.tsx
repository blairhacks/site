"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const days = (d1: Date, d2: Date) => {
  let diff = d1.getTime() - d2.getTime();
  let total = Math.ceil(diff / (1000 * 3600 * 24));
  return total;
};

export default function Timeline() {
  const events = [
    {
      name: "Montgomery County Hackathon",
      startDate: new Date("2024-12-16"),
      endDate: new Date("2024-12-17"),
      date: "December 16th-17th, 2024",
      description:
        "Montgomery County Hackathon was an in-person hackathon in Rockville, MD.",
      link: "https://www.instagram.com/mchackathon2023/",
      archive: true,
    },
    {
      name: "BlairHacks_6",
      startDate: new Date("2023-03-25"),
      endDate: new Date("2023-03-26"),
      date: "March 25th-26th, 2023",
      description:
        "BlairHacks_6 was an in-person 24-hour hackathon hosted by MBHS students in Silver Spring, MD. At BlairHacks, high school students in the DMV area were challenged to bring their innovative ideas to life in the form of websites, apps, and robots. Our hackathon was free and accessible to all high school students thanks to our wonderful sponsors.",
      link: "https://6.blairhacks.com",
      archive: true,
    },
    {
      name: "BlairHacks Mini '22",
      startDate: new Date("2022-12-10"),
      endDate: new Date("2022-12-10"),
      date: "December 10th, 2022",
      description:
        "Introducing BlairHacks' first IRL event since 2020! BlairHacks Mini '22 was a day-long event where high school students around Montgomery County came together to build apps, games, and hardware. It was a day filled with hands-on coding + tech workshops, fun activities, and more!",
      link: "https://mini.blairhacks.com",
      archive: true,
    },
    {
      name: "BlairHacks_5",
      startDate: new Date("2022-02-18"),
      endDate: new Date("2022-02-20"),
      date: "February 18th-20th, 2022",
      description:
        "BlairHacks_5 was a virtual 36-hour hackathon hosted by MBHS students in Silver Spring, MD. At BlairHacks_5, high school students in the DMV area were challenged to bring their innovative ideas to life in the form of websites, apps, and robots. Our hackathon was free and accessible to all high school students thanks to our wonderful sponsors.",
      link: "https://5.blairhacks.com",
      archive: true,
    },
    {
      name: "BlairHacks_4",
      startDate: new Date("2020-02-19"),
      endDate: new Date("2021-02-21"),
      date: "February 28th-29th, 2020",
      description:
        "BlairHacks_4 was an in-person hackathon hosted by MBHS students in Silver Spring, MD. BlairHacks_4 featured skill workshops, fun mini-events, and one-on-one assistance from our fantastic mentors. Our hackathon was free and accessible to all high school students thanks to our wonderful sponsors.",
      archive: true,
    },
  ];

  return (
    <ol className="relative border-l border-gray-700">
      {events.map(
        ({ name, date, description, link, archive, startDate }, i) => (
          <li className="mb-10 ml-6" key={i}>
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-900 rounded-full ring-8 ring-gray-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <Link href={link || ""} target="blank">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + 0.1 * i,
                  ease: "linear",
                }}
                className="flex items-center mb-1 text-lg font-semibold text-white"
              >
                {name}
                {archive ? (
                  <span className="bg-red-500 text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                    Archive
                  </span>
                ) : (
                  <span className="bg-green-500 text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                    In {days(startDate, new Date())} days
                  </span>
                )}
              </motion.h3>
            </Link>
            <motion.time
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.33 + 0.1 * i,
                ease: "linear",
              }}
              className="block mb-2 text-sm font-normal leading-none text-gray-500"
            >
              {date}
            </motion.time>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.37 + 0.1 * i,
                ease: "linear",
              }}
              className="mb-4 text-base font-normal text-gray-400"
            >
              {description}
            </motion.p>
          </li>
        )
      )}
    </ol>
  );
}
