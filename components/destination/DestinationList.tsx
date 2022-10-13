/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Destination } from "../../models";
import { imageFade, textSlide } from "../../utils/motion";

export default function DestinationList({ destinations }) {
  const [order, setOrder] = useState(0);

  const {
    name,
    images: { png },
    description,
    distance,
    travel,
  } = destinations[order];

  return (
    <>
      <Head>
        <title>Destinations</title>
      </Head>

      <div className="max-w-7xl mx-auto px-8 md:px-32 pb-32 pt-32 lg:pt-48">
        <h1 className="text-indigo-100 uppercase text-lg lg:text-3xl tracking-[4px] font-sanCondensed mb-8">
          <span className="text-gray-500 font-bold mr-2 lg:mr-4">01</span>pick
          your destination
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between space-x-0 lg:space-x-16">
          {/* Image */}
          <motion.img
            key={png}
            src={png}
            alt=""
            variants={imageFade}
            initial="hide"
            animate="show"
          />

          {/* Description */}
          <div>
            <div className="flex space-x-6 justify-center lg:justify-start">
              {destinations.map((destination: Destination, index: number) => (
                <button
                  key={index}
                  className={`text-indigo-100 font-sanCondensed uppercase tracking-widest pb-2 ${
                    index === order
                      ? "text-white border-b-2"
                      : "text-indigo-100"
                  }`}
                  onClick={() => setOrder(index)}
                >
                  {destination.name}
                </button>
              ))}
            </div>

            <motion.div
              key={name}
              variants={textSlide}
              initial="hide"
              animate="show"
              className="space-y-8 text-center lg:text-left mt-12"
            >
              <h1 className="font-serif uppercase text-6xl lg:text-8xl text-white">
                {name}
              </h1>
              <p className="text-indigo-100 leading-loose font-sans lg:text-lg">
                {description}
              </p>
              <div className="w-full h-[1px] bg-white/20"></div>

              {/* Statistics */}
              <div className="flex flex-col md:flex-row justify-center lg:justify-start md:space-x-12 space-y-6 md:space-y-0">
                <div className="text-center lg:text-left">
                  <h2 className="uppercase text-indigo-100 mb-2 tracking-wider">
                    avg. distance
                  </h2>
                  <p className="uppercase text-white text-3xl font-serif">
                    {distance}
                  </p>
                </div>

                <div className="text-center lg:text-left">
                  <h2 className="uppercase text-indigo-100 mb-2 tracking-wider">
                    est. travel time
                  </h2>
                  <p className="uppercase text-white text-3xl font-serif">
                    {travel}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
