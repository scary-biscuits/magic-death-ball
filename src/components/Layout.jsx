import React, { useEffect, useState } from "react";
import AnswerDisplay from "./AnswerDisplay";


const Layout = (props) => {

const [showAnswer, setShowAnswer] = useState(true)

useEffect(() => { 
  const timer = setTimeout(() => { 
    setShowAnswer(false); 
  }, 10000); 

  return () => clearTimeout(timer); 
}, []); 

if (showAnswer) {
  return (
    <div className={props.shake ? "parentContainer shake" : "parentContainer"}>
      <img src="./death_star.webp" />
      <div className="display orbitron-three">
        <AnswerDisplay answer={props.answer} />
      </div>
    </div>
  );
}
return (
<div className="display orbitron-three">
<h4>Just kidding! Star Trek is better. RESISTANCE IS FUTILE</h4>
</div>
)
};

export default Layout;
