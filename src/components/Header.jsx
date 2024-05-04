import React from "react";
import Dropdown from "./Options";

const Header = () => {
  return (
    <>
      <div>
        <h1>The definitive answer to the hardest question</h1>
      </div>
      <div>
        <h4>
          Without a doubt, the best <Dropdown /> is:
        </h4>
      </div>
    </>
  );
};

export default Header;
