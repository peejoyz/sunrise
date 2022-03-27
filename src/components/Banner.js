import React from "react";
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h5>{title}</h5>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
