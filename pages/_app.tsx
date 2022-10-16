import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<div className="flex justify-center fixed pl-3 top-1/3">
				<Nav />
			</div>
			<div className="pl-16">
				<div className="text-white p-8 md:p-16">
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
}

export default MyApp;
