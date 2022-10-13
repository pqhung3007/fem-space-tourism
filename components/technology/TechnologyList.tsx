import React, { useState } from "react";
import Head from "next/head";
import { Technology } from "../../models";

export default function TechnologyList({ technologies }) {
  const [order, setOrder] = useState(0);

  const {
    name,
    images: { portrait, landscape },
    description,
  } = technologies[order];

  return (
    <>
      <Head>
        <title>Technology</title>
      </Head>

      <div className="max-w-7xl mx-auto lg:pl-32 pb-24 pt-32 lg:pt-48">
        <h1 className="text-indigo-100 uppercase text-lg lg:text-3xl tracking-[4px] font-sanCondensed pl-8 md:pl-32 lg:pl-0 mb-8">
          <span className="text-gray-500 font-bold mr-2 lg:mr-4">03</span>
          space launch 101
        </h1>

        {/* main container */}
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center space-y-6 lg:space-y-0">
          <picture>
            <source srcSet={portrait} media="(min-width: 1024px) " />
            <img src={landscape} alt="" />
          </picture>

          <div className="flex flex-col lg:flex-row justify-center gap-12 lg:mr-20">
            {/* Buttons */}
            <div className="flex justify-center lg:flex-col mt-8 space-x-4 lg:space-x-0 lg:space-y-8">
              {technologies.map((technology: Technology, index: number) => (
                <button
                  className={`flex justify-center items-center w-8 h-8 md:w-16 md:h-16 text-lg lg:text-2xl font-serif rounded-full border border-white/20 hover:border-white duration-200 ${
                    order === index
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  }`}
                  key={technology.name}
                  onClick={() => setOrder(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Info */}
            <div className="flex flex-col space-y-6 px-8 lg:px-0">
              <div className="text-center lg:text-left">
                <small className="font-sanCondensed text-indigo-100 uppercase text-lg tracking-wider">
                  the terminology...
                </small>
                <h2 className="font-serif text-white uppercase text-3xl lg:text-5xl mt-2">
                  {name}
                </h2>
              </div>

              <p className=" text-indigo-100 leading-relaxed text-center lg:text-left lg:text-lg max-w-md">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
