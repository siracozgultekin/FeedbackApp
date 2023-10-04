import React from "react";

const Header = ({ title }) => {
  return (
    <div className="bg-orange-300 h-12 flex items-center justify-center">
      <h1 className="font-bold text-xl text-white">{title}</h1>
    </div>
  );
};

export default Header;
