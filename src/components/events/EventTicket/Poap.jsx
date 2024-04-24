import { TriangleLogo } from "iconsax-react";
import { events } from "../../CONSTANT";

const Poap = () => {
  return (
    <>
      {events.map((items) => {
        const { title } = items;
        return (
          <div
            className="h-[300px] w-[300px] flex items-center justify-center"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              background: "#9A8873",
            }}
          >
            <div
              className="h-[280px] w-[280px] flex items-center justify-center flex-col"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                background: " #3A2618",
              }}
            >
              <div className="flex items-center justify-center flex-col gap-2 text-[#fff]">
                <div className="flex items-center justify-center gap-2">
                  <TriangleLogo size="48" className="text-[#fff]" />
                  <p className="font-bold">NFTix</p>
                </div>

                <h1 className="italic font-light ">Proof of attendance</h1>

                <p className="font-bold font-mono">{title}</p>

                <p className="font-thin">1 day course | 7 CPE Credits</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Poap;
