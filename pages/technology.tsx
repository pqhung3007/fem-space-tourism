import React from "react";
import TechnologyList from "../components/technology/TechnologyList";
import { Technology } from "../models";
import { fetchCorrespondingData } from "../utils/fetching";

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
  const technologyData = await fetchCorrespondingData<Technology>("technology");

  return {
    props: { technologyData },
  };
}
