import React from "react";
import Navbar from "../components/Home/Navbar";
import { HeroSection } from "../components/Home/HeroSection";
import About from "./About";
import FAQs from "../components/Home/FAQs";
import Contact from "./contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <html lang="en">
      <body>
        <div className="bg-hero">
          <Navbar />
          <section className=" ">
            <HeroSection />
          </section>
          <section className="lg:px-20 py-5 bg-black">
            <About />
          </section>
          <section className="lg:px-20 py-10 bg-hero">
            <div className="container mx-auto">
              <h1 className="text-5xl font-extralight leading-snug text-neutral-100">
                Sell your favorite events tickets effortlessly{" "}
                <span className="bg-clip-text font-medium text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
                  without stress and Ads{" "}
                </span>
                fees or multiple click confirmation pop-ups that hold you back
              </h1>
            </div>
          </section>
          <section className="lg:px-20 py-10 bg-black-2">
            <FAQs />
          </section>
          <section className="lg:px-20 py-40 bg-contact-img bg-center">
            <Contact />
          </section>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default LandingPage;
