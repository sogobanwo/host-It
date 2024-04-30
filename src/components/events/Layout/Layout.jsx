import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { Add, CalendarAdd, CalendarEdit, CalendarSearch, HomeHashtag, ScanBarcode, Ticket } from "iconsax-react";
import { X } from "lucide-react";

const EventLayout = ({ children, idPage, setShowCalendar, showCalendar }) => {
  const baseUrl = process.env.REACT_APP_baseURL
  const [menu, setMenu] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (menu && ref.current && !ref.current.contains(e.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [menu]);
  return (
    <div className="layoutBg w-screen mdl:w-full flex overflow-x-hidden  min-h-screen font-sans">
      <SideBar />
      <div className="mdl:ml-64 grow">
        <NavBar idPage={idPage} />
        <div className="overflow-y-auto">{children}</div>
        <div className="mdl:hidden">
          <div
            className={`${menu === false ? "fixed" : "hidden"
              } right-3 bottom-12 p-2 bg-[#222222] rounded-full mb-10 z-50`}
            onClick={() => {
              setMenu(true);
            }}
          >
            <Add size="24" color="#fff" />
          </div>{" "}
          <div
            className={`${menu === true ? "fixed" : "hidden"
              } mdl:gap-4 gap-2 right-3 bottom-24 items-center justify-center flex flex-col z-50`}
          >
            <Link to={`/dashboard`}>
              <div className={`right-3 p-2 bg-[#222222] rounded-full z-50`}>
                <HomeHashtag size="24" color="#fff" />
              </div>{" "}
            </Link>
            <Link to={`/all-events`}>
              <div className={`right-3 p-2 bg-[#222222] rounded-full z-50`}>
                <CalendarSearch size="24" color="#fff" />
              </div>{" "}
            </Link>

            <Link to={`/create-event`} className={`right-3 p-2 bg-[#222222] rounded-full z-50`}>
              <CalendarAdd size="24" color="#fff" />
            </Link>{" "}

            <Link to={`/manage-events`}>
              <div className={` right-3 p-2 bg-[#222222] rounded-full z-50`}>
                <CalendarEdit size="24" color="#fff" />
              </div>{" "}
            </Link>
            <Link to={`/tickets-poap`}>
              <div className={` right-3 p-2 bg-[#222222] rounded-full z-50`}>
                <Ticket size="24" color="#fff" />
              </div>{" "}
            </Link>
            <Link to={`/mint-poap`}>
              <div className={` right-3 p-2 bg-[#222222] rounded-full z-50`}>
                <ScanBarcode size="24" color="#fff" />
              </div>{" "}
            </Link>
            <div
              className={` right-3 p-2 bg-[#222222] rounded-full z-50`}
              onClick={() => {
                setMenu(false);
              }}
            >
              {
                menu ? <X size="24" color="#fff" /> : <Add size="24" color="#fff" />
              }

            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLayout;
