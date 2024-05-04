import React, { useEffect, useState } from "react";
import AnswerDisplay from "./AnswerDisplay";

const Layout = (props) => {
  const [shake, setShake] = useState(false);

  const onToggle = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 2000);
  };

  return (
    <div className={shake ? "parentContainer shake" : "parentContainer"}>
      <img src="./death_star.webp" />
      <div className="display orbitron-three">
        <AnswerDisplay answer={props.answer} />
      </div>
    </div>
  );
};

export default Layout;
