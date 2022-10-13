import React from "react";
import CrewList from "../components/crew/CrewList";
import { Crew } from "../models";
import { fetchCorrespondingData } from "../utils";

interface ICrew {
  crewData: Crew[];
}

export default function crew({ crewData }: ICrew) {
  return (
    <main className="bg-mobile-crew md:bg-tablet-crew lg:bg-desktop-crew min-h-screen bg-cover">
      <CrewList crew={crewData} />
    </main>
  );
}

export async function getStaticProps() {
  const crewData = await fetchCorrespondingData<Crew>("crew");

  return {
    props: { crewData },
  };
}
