import React from "react";
import AnswerDisplay from "./AnswerDisplay";


const Layout = (props) => {

  return (
    <div className="parentContainer">
      <img src="./death_star.webp" />
      <div className="display">
        <AnswerDisplay answer = {props.answer}
         />
      </div>
    </div>
  );

};

export default Layout;
