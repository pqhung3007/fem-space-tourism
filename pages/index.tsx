export default function Home() {
  return (
    <main className="bg-mobile md:bg-tablet lg:bg-desktop bg-cover min-h-screen pb-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between max-w-7xl mx-auto px-4 md:px-40 pt-40 lg:pt-60">
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-indigo-100 font-sanCondensed text-3xl lg:text-4xl tracking-wider uppercase">
            So, you want to travel to{" "}
            <span className="block mt-8 text-6xl lg:text-9xl uppercase tracking-wider font-serif text-white">
              space
            </span>
          </h1>
          <p className="text-indigo-100 text-base md:text-lg max-w-md">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="uppercase text-3xl text-center font-serif tracking-wider bg-white rounded-full w-48 h-48 md:w-60 md:h-60 mt-28 explore">
          Explore
        </button>
      </div>
    </main>
  );
}
