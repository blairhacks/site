"use client";
import React from "react";
import Nav from "../../components/Nav";

export default function WithNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-center fixed pl-3 md:pl-3 pt-3 md:pt-0 bottom-5 md:top-3 z-50">
        <Nav />
      </div>
      <div className="pb-16 md:pb-0 md:pl-16">
        <div className="text-white p-8 md:p-16">{children}</div>
      </div>
    </>
  );
}
