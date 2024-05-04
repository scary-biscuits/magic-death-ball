import React from "react";
import Dropdown from "./Options";
import Options from "./Options";

const Header = (props) => {
  console.log(props)
  return (
    <>
      <div>
        <h1>The definitive answer to the hardest question</h1>
      </div>
      <div>
        <h4>
          Without a doubt, the best <Options handleSelect={props.handleSelect}
              selectedOption={props.selectedOption}
              setSelectedOption={props.setSelectedOption}/> is:
        </h4>
      </div>
    </>
  );
};

export default Header;
