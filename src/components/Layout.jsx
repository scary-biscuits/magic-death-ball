import React, { useEffect, useState, useRef} from "react";
import AnswerDisplay from "./AnswerDisplay";

const Layout = (props) => {

  return (
    <div className={props.shake ? "parentContainer shake" : "parentContainer"}>
      <img src="./death_star.webp" />
      <div className="display orbitron-three">
        <AnswerDisplay answer={props.answer} />
      </div>
    </div>
  );
};

export default Layout;
