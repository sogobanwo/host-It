import React from "react";
import { Link } from "react-router-dom";

const GradientButton = ({
  title,
  link,
  className = "",
  style = {},
}) => {
  return (
    <Link to={link}>
      <div
        className={`hover:bg-[#fff] px-8 py-4 rounded-full border border-[#fff] pointer-events-auto ${className}`}
        style={{
          background:
            "linear-gradient(124deg, #6F133F -232.39%, #332668 243.87%)",
          backgroundSize: "100% 100%",
          ...style,
        }}
      >
        <div className="text-[#fff] text-base font-black leading-tight">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default GradientButton;
