import React from "react";
import "../styles/globals.css";
import Background from "../components/Background";
import Footer from "../components/Footer";

export const metadata = {
  title: "BlairHacks",
  description:
    "An annual hackathon hosted by MBHS students in Silver Spring, MD.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="h-full flex flex-col justify-between"
        suppressHydrationWarning
      >
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}
