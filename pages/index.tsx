import React from "react";
import Timeline from "../components/Timeline";

export default function Home() {
	return (
		<div className="h-full">
			<div className="pb-16">
				<h1 className="font-bold text-4xl md:text-7xl">BlairHacks</h1>
				<p className="text-sm md:text-xl">
					An annual hackathon hosted by MBHS students in Silver Spring, MD.
				</p>
			</div>
			<Timeline />
		</div>
	);
}
