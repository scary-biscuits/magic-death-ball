import React from "react";
import Options from "./Options";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="./starWars.webp" />
      </div>
      <div className="orbitron-one">
        <div className="orbitron-two">
          <h1>The definitive answer to the hardest question</h1>
        </div>
        <div>
          <h4>
            Without a doubt, the best <Options /> is:
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
