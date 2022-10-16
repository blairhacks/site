import React from "react";

export default function Timeline() {
	return (
		<ol className="relative border-l border-gray-200 dark:border-gray-700">
			<li className="mb-10 ml-6">
				<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
					<svg
						aria-hidden="true"
						className="w-3 h-3 text-blue-600 dark:text-blue-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						></path>
					</svg>
				</span>
				<h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
					BlairHacks_6
					<span className="bg-blue-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-3">
						Upcoming
					</span>
				</h3>
				<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
					Feburary 17th-18th, 2023
				</time>
				<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					BlairHacks_6 is a 24-hour hackathon hosted by MBHS students in Silver
					Spring, MD. At BlairHacks, high school students in the DMV area are
					challenged to bring their innovative ideas to life in the form of
					websites, apps, and robots. Our hackathon is free and accessible to
					all high school students thanks to our wonderful sponsors.
				</p>
			</li>
			<li className="mb-10 ml-6">
				<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
					<svg
						aria-hidden="true"
						className="w-3 h-3 text-blue-600 dark:text-blue-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						></path>
					</svg>
				</span>
				<h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
					BlairHacks Mini '22
					<span className="bg-blue-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-3">
						Upcoming
					</span>
				</h3>
				<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
					December 10th, 2022
				</time>
				<p className="text-base font-normal text-gray-500 dark:text-gray-400">
					Introducing BlairHacks' newest event (and first IRL event since 2020)!
					BlairHacks Mini is a day-long event where high school students around
					Montgomery County will come together to build apps, games, and
					hardware. Look forward to a day of hands-on coding + tech workshops,
					fun activities, and more!
				</p>
			</li>
			<li className="ml-6">
				<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
					<svg
						aria-hidden="true"
						className="w-3 h-3 text-blue-600 dark:text-blue-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						></path>
					</svg>
				</span>
				<h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
					BlairHacks_5
					<span className="bg-blue-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ml-3">
						Archive
					</span>
				</h3>
				<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
					Feburary 18th-20th, 2022
				</time>
				<p className="text-base font-normal text-gray-500 dark:text-gray-400">
					BlairHacks_5 is a 36-hour hackathon hosted by MBHS students in Silver
					Spring, MD. At BlairHacks, high school students in the DMV area are
					challenged to bring their innovative ideas to life in the form of
					websites, apps, and robots. Our hackathon is free and accessible to
					all high school students thanks to our wonderful sponsors.
				</p>
			</li>
		</ol>
	);
}
