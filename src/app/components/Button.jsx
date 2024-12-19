import React from "react";

const Button = ({ children, classes }) => {
  return (
    <button
      className={`w-full h-10 bg-[#F33F3F] rounded-md text-black leading-3 ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
