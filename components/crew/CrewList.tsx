/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head";
import { Crew } from "../../models";

export default function CrewList({ crew }) {
  const [order, setOrder] = useState(0);

  const {
    name,
    images: { png },
    role,
    bio,
  } = crew[order];

  return (
    <>
      <Head>
        <title>Crew</title>
      </Head>

      <div className="max-w-7xl mx-auto px-8 md:px-32 pb-24 md:pb-0 pt-32 lg:pt-48">
        <h1 className="text-indigo-100 uppercase text-lg lg:text-3xl tracking-[4px] font-sanCondensed mb-8">
          <span className="text-gray-500 font-bold mr-2 lg:mr-4">02</span>
          meet your crew
        </h1>

        {/* main container */}
        <div className="flex flex-col md:flex-col-reverse justify-center items-center lg:flex-row-reverse space-y-6 md:space-y-0">
          <img src={png} alt="" className="w-64 md:w-full mx-auto" />

          <div className="flex flex-col md:flex-col-reverse gap-8 lg:mr-8">
            {/* Order */}
            <div className="flex space-x-4 justify-center lg:justify-start lg:mt-8">
              {crew.map((crewMember: Crew, index: number) => (
                <button
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full hover:bg-white duration-200 ${
                    order === index ? "bg-white" : "bg-white/50"
                  }`}
                  key={crewMember.name}
                  onClick={() => setOrder(index)}
                ></button>
              ))}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <h2 className="flex flex-col gap-2 text-white text-center lg:text-left font-serif uppercase text-3xl lg:text-5xl">
                <span className="text-slate-500 text-xl lg:text-3xl">
                  {role}
                </span>
                {name}
              </h2>
              <p className="text-indigo-100 leading-relaxed text-center lg:text-left lg:text-lg">
                {bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
