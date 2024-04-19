import React from "react";
import { NavUtil } from "./NavUtil";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="container mx-auto flex justify-between py-5">
      {/* logo */}
      <p className="py-3 text-2xl tracking-widest font-semibold font-hanken text-neutral-200">
        NFTix
      </p>
      {/* navs */}
      <ul className="rounded-3xl bg-black py-2 px-4 flex gap-5 lg:text-lg text-neutral-200">
        {NavUtil.map((link) => {
          return (
            <li className=" hover:bg-hero rounded-3xl py-1 px-5">
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
      {/* entry */}
      <div>
        <button className=" flex gap-3 px-8 py-2 rounded-xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1 text-neutral-100 font-semibold ">
          Explore NFTix
        </button>
      </div>
    </section>
  );
};

export default Navbar;
