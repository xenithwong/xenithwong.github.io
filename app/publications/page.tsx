import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
};

export default function Page() {
  return (
    <main className="md:w-[40rem] w-full m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
      <h1 className="text-3xl font-semibold">Publications</h1>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Work-in-Progress Projects</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          Influence of AI-driven Automated Valuation on Property Market Prices (with <em>Lee Kwan Ok</em>)
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Non-Academic/Practitioner Publications</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          <em>Mandai: Balancing Development and Nature.</em> Urban Systems Studies, Centre for Liveable Cities, 2026. Acknowledged for research contribution.{" "}
          
            <a
          
            href="https://knowledgehub.clc.gov.sg/publications-library/mandai--balancing-development-and-nature/"
            className="underline"
            target="_blank"
          >
            Read here
          </a>
        </p>
      </section>
    </main>
  );
}