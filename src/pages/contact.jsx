import React from "react";
import { Link } from "react-router-dom";
import { Socials } from "../components/Home/Socials";

const Contact = () => {
  return (
    <div className="relative container mx-auto flex justify-between">
      <div className="basis-1/2 flex flex-col gap-8 pr-20">
        <h1 className="text-6xl text-white">
          Stay updated with our latest product releases
        </h1>
        <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
          Follow our social media accounts
        </p>
        <div className="flex gap-5">
          {Socials.map((item, index) => (
            <Link href={item.link} className="" key={index}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="basis-1/2 flex flex-col gap-8 px-16">
        <h1 className="text-2xl text-neutral-100">
          Have questions or need assistance? Our friendly support team is here
          to help.
        </h1>
        <button className="w-52 p-[2px] rounded-xl bg-gradient-to-r from-[#E32882] via-[#2C8BC0] to-[#BB0CE7] text-neutral-100 font-semibold">
          <p className="bg-black rounded-xl w-full h-full px-8 py-2 hover:bg-neutral-800 flex justify-between">
            <span>Contact us 😉</span>
          </p>
        </button>
      </div>
      <div className="absolute inset-0 rounded-3xl h-48 w-[1.6px] mx-auto bg-gradient-to-b from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]"></div>
    </div>
  );
};

export default Contact;
