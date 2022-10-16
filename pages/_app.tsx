import React from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const ignoreNav = ["/donate"];

	return (
		<div>
			<div className="flex justify-center fixed pl-3 md:pl-3 pt-3 md:pt-0 bottom-5 md:top-3 z-50">
				<Nav />
			</div>
			<div
				className={`${
					!ignoreNav.includes(router.pathname) && "pb-16 md:pb-0 md:pl-16"
				}`}
			>
				<div
					className={`text-white ${
						!ignoreNav.includes(router.pathname) && "p-8 md:p-16"
					}`}
				>
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
}

export default MyApp;
