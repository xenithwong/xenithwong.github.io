import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
};

export default function Page() {
  return (
    <main className="md:w-[40rem] w-full m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
      <h1 className="text-3xl font-semibold">Publications</h1>
      <p className="text-neutral-600 dark:text-neutral-300">
        Coming soon — check back once my first paper is out!
      </p>
    </main>
  );
}