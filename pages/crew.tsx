import React from "react";
import CrewList from "../components/crew/CrewList";
import { Crew } from "../models";

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
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  const crewData = data.crew;

  return {
    props: { crewData },
  };
}
