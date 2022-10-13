import React from "react";
import TechnologyList from "../components/technology/TechnologyList";
import { Technology } from "../models";

interface ITech {
  technologyData: Technology[];
}

export default function technology({ technologyData }: ITech) {
  return (
    <main className="bg-mobile-technology md:bg-tablet-technology lg:bg-desktop-technology min-h-screen bg-cover">
      <TechnologyList technologies={technologyData} />
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  const technologyData = data.technology;

  return {
    props: { technologyData },
  };
}
