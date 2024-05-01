import React from "react";
import hero from "../../asset/hero.svg";

export const HeroSection = () => {
  return (
    <section
      className="container mx-auto py-24 pl-8  rounded-3xl"
      style={{
        background:
          "radial-gradient(50% 150% at top left, #2c62917e, #030303, transparent), radial-gradient(50% 150% at bottom right, #9e428a7c, #030303, #030303)",
      }}
    >
      {/* Explore and experience the future of web3 event ticketing with HostIT - your one-stop-shop for seamless event registration, ticketing, and proof of attendance. */}
      <div className="flex gap-10 2xl:w-[1280px] mx-auto">
        <div className="w-[580px] flex flex-col gap-4">
          <h1 className="font-hanken text-4xl font-light leading-snug text-neutral-100">
            Explore and experience the future of web3{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-spi-pink via-spi-blue to-spi-purple font-sans">
              promising blockchain projects
            </span>{" "}
           - your one-stop-shop for{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-spi-pink via-spi-blue to-spi-purple font-sans">
              seamless event registration, ticketing,
            </span>{" "}
            and proof of attendance.
          </h1>
          <div className="text-neutral-100 text-lg">
            Say goodbye to cumbersome processes and hello to a robust platform that streamlines every step of the way.
          </div>
          <div className="flex gap-5 mt-5">
            <button className="lg:px-8 md:px-8 lg:py-2  px-2 rounded-xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1 text-neutral-100 font-semibold">
              Explore HostIT
            </button>
            <button className="p-[2px] rounded-xl bg-gradient-to-r from-spi-pink-2 via-spi-blue-2 to-spi-purple-2 text-neutral-100 font-semibold">
              <p className="bg-black rounded-xl w-full h-full px-8 py-2 hover:bg-neutral-800">
                Create Event
              </p>
            </button>
          </div>
        </div>
        <div className="lg:block md:block hidden relative w-1/2 2xl:h-[500px]">
          <img src={hero} alt="hero" className="absolute inset-0" />
        </div>
      </div>
    </section>
  );
};
