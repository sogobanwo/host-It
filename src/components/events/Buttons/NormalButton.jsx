import React from "react";
import { Link } from "react-router-dom";

const NormalButton = ({
  title,
  link,
  className = "",
  style = {},
}) => {

  
  return (
    <Link to={link}>
      <div
        className={`bg-[#fff] border border-deepPink px-8 py-4 rounded-full pointer-events-auto ${className} hover:bg-[#ddd]`}
        // style={{
        //   backgroundColor: "white",
        //   ...style,
        // }}
      >
        <div className="text-deepPink text-base font-black leading-tight">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default NormalButton;
