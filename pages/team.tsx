import React from "react";

const team = [
	{
		name: "Linkai Wu",
		position: "Director",
		email: "linkai@blairhacks.com",
		website: "https://linkaiwu.com",
		image: "https://linkaiwu.com/assets/linkai.png",
	},
	{
		name: "Tinu Vanapamula",
		position: "Director",
		email: "tinu@blairhacks.com",
		website: "https://tinu.tech",
		image: "https://tinu.tech/assets/personal.jpeg",
	},
	{
		name: "Anika Rai",
		position: "Finance Lead",
		email: "anika@blairhacks.com",
		website: "https://www.linkedin.com/in/anika-rai-8a04b2201/",
		image:
			"https://media-exp1.licdn.com/dms/image/D4D03AQFIJ7mm7onx9Q/profile-displayphoto-shrink_200_200/0/1647114410703?e=1671667200&v=beta&t=FO0QaoaQ6GRo3ElTPD5w6k1z3uVVPneg2KpCtBCWc8U",
	},
	{
		name: "Annie Gao",
		position: "Marketing Lead",
		email: "annie@blairhacks.com",
		website: "https://www.linkedin.com/in/anniegao24/",
		image:
			"https://media-exp1.licdn.com/dms/image/C5603AQEwm7Zh_1JEtA/profile-displayphoto-shrink_200_200/0/1655784236445?e=1671667200&v=beta&t=ZLbrO3SngKfNkPaw1jkYr0vHh1cxSHfgxZm-qKJiLJY",
	},
	{
		name: "Patrick Zhang",
		position: "Logistics Lead",
		email: "patrick@blairhacks.com",
		website: "https://www.linkedin.com/in/patrick-w-zhang/",
		image:
			"https://media-exp1.licdn.com/dms/image/C4E03AQHFvK1pasAP7Q/profile-displayphoto-shrink_200_200/0/1662428152507?e=1671667200&v=beta&t=lme-SgLSo8b4mepajSqUJOSajkCYwF5nakU-1VagkqY",
	},
];

export default function Team() {
	return (
		<div className="text-center">
			<h1 className="font-bold text-4xl pb-10">Our Team</h1>
			<div className="flex justify-center">
				<div className="flex gap-5">
					{team.map((member) => (
						<div>
							<a href={member.website} target="blank">
								<img
									className="rounded-full h-36 w-36 hover:scale-105 transform transition duration-300 mb-5"
									src={member.image}
								/>
							</a>
							<h2>{member.name}</h2>
							<h3>{member.position}</h3>
							<a href={`mailto:${member.email}`}>{member.email}</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
