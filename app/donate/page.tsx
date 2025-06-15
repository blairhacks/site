import React from "react";

export default function Donate() {
  return (
    <iframe
      src="https://hcb.hackclub.com/donations/start/dchacks"
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
