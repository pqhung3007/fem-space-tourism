import React from "react";
import DestinationList from "../components/destination/DestinationList";
import { Destination } from "../models";

interface IDes {
  destinationData: Destination[];
}

export default function destination({ destinationData }: IDes) {
  return (
    <main className="bg-mobile-destination md:bg-tablet-destination lg:bg-desktop-destination min-h-screen bg-cover">
      <DestinationList destinations={destinationData} />
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  const destinationData = data.destinations;

  return {
    props: { destinationData },
  };
}
