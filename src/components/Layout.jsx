import React, { useEffect, useState } from "react";

const Layout = (props) => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 2000);
  }, [props.answer]);

  return (
    <div className={shake ? "parentContainer shake" : "parentContainer"}>
      <img src="./death_star.webp" />
      <div className="display orbitron-three">
        <h4>{props.answer}</h4>
      </div>
    </div>
  );
};

export default Layout;
