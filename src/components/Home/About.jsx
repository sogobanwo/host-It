import React from "react";
import access from "../../asset/access.svg";

const About = () => {
  return (
    <div className="flex flex-col gap-28">
      <div className="container mx-auto">
        <h1 className="text-5xl font-semibold font-hanken w-80 py-5 bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9] font-sans">
          About HostIT
        </h1>
        <p className="lg:text-xl text-white">
          HostIT is a web3 event ticketing platform that streamlines the event experience.We harness blockchain technology for a transparent, trustless, and inclusive ecosystem.Empowering event organizers and attendees alike, we create meaningful connections.
          Join us in shaping the future of events and building a community that values innovation. Welcome to HostIT, where events meet innovation!
        </p>
      </div>
      <div className="container mx-auto flex justify-between">
        <div className="w-[550px] flex flex-col gap-8">
          <h1 className="text-5xl font-hanken leading-tight text-neutral-100">
            Your ticket to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9] font-sans">
              events and parties
            </span>
          </h1>
          <p className="lg:text-lg text-neutral-100">
          Explore web3 events with a seamless experience. From registering for events to creating your own, we've got you covered. Get early access to exclusive events, earn digital badges, and connect with like-minded individuals. The future of events and innovation awaits! Join HostIT today!
          </p>
          <div className="flex gap-4">
            <div className="lg:w-3/4 md:w-3/4 1/2 bg-hero p-5 flex flex-col gap-2 rounded-md text-center">
              <p className="text-3xl font-semibold w-32 mx-auto bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
                0
              </p>
              <p className="text-white">Total Events Created</p>
            </div>
            <div className="lg:w-3/4 md:w-3/4 1/2 bg-hero p-5 flex flex-col gap-2 rounded-md text-center">
              <p className="text-3xl font-semibold w-32 mx-auto bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
                0
              </p>
              <p className="text-white">Total Successful Events</p>
            </div>
          </div>
        </div>
        <div className="-mt-24 lg:block md:block hidden">
          <img src={access} alt="access" height={550} />
        </div>
      </div>
    </div>
  );
};

export default About;
