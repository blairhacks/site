import React from "react";

export default function donates() {
	return (
		<iframe
			src="https://bank.hackclub.com/donations/start/blairhacks"
			style={{ height: "100vh" }}
			name="donateFrame"
			scrolling="yes"
			frameBorder="0"
			marginHeight={0}
			marginWidth={0}
			width="100%"
			allowFullScreen
		></iframe>
	);
}
