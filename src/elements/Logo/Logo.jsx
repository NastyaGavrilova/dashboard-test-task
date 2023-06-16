import React from "react";
import "./_logo.scss";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__wrapper">
        <LogoIcon />
        <h2 className="logo__title">Dashboard</h2>
      </div>
      <p className="logo__version">v.01</p>
    </div>
  );
};

export default Logo;
