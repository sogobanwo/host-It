import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { Add, CalendarAdd, CalendarSearch, House2 } from "iconsax-react";

const EventLayout = ({ children, idPage, setShowCalendar, showCalendar }) => {
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
    <div className="w-screen mdl:w-full flex overflow-x-hidden bg-deepBlue min-h-screen font-sans">
      <SideBar />
      <div className="mdl:ml-64 grow">
        <NavBar idPage={idPage} />
        <div className="overflow-y-auto">{children}</div>
        <div className="mdl:hidden">
          <div
            className={`${
              menu === false ? "fixed" : "hidden"
            } right-3 bottom-12 p-3 bg-deepPurple rounded-full mb-10 z-50`}
            onClick={() => {
              setMenu(true);
            }}
          >
          <Add size="32" color="#FF8A65"/>
          </div>{" "}
          <div
            className={`${
              menu === true ? "fixed" : "hidden"
            } gap-4  right-3 bottom-20 items-center justify-center flex flex-col z-50`}
          >
            <Link href={"/events"}>
              <div className={`right-3 p-3 bg-deepPurple rounded-full z-50`}>
              <House2 size="32" color="#FF8A65"/>
              </div>{" "}
            </Link>
            <Link href={"/explore"}>
              <div className={`right-3 p-3 bg-deepPurple rounded-full z-50`}>
              <CalendarSearch size="32" color="#FF8A65"/>
              </div>{" "}
            </Link>
           
              <div className={`right-3 p-3 bg-deepPurple rounded-full z-50`} onClick={()=>{setShowCalendar(!showCalendar); console.log(showCalendar)}}>
              <CalendarAdd size="32" color="#FF8A65"/>
              </div>{" "}
            
            <Link href={"/events"}>
              <div className={` right-3 p-3 bg-deepPurple rounded-full z-50`}>
              <CalendarAdd size="32" color="#FF8A65"/>
              </div>{" "}
            </Link>
            <div
              className={` right-3 p-2 bg-deepPurple rounded-full z-50`}
              onClick={() => {
                setMenu(false);
              }}
            >
             <Add size="32" color="#FF8A65"/>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLayout;
