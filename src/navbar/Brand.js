import React from "react";
import { logo, title } from "../../constants/Header";

const Brand = () => {
  return (
    <header className="hero-header">
      <nav>
        <a href="/">
          <img className="logo" src={logo} alt="404 img" />
        </a>
        <h2 className="hero-title">{title}</h2>
      </nav>
    </header>
  );
};

export default Brand;
