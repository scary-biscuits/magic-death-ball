import React, { useEffect, useState } from "react";

const AnswerDisplay = (props) => {

  // const [display, setDisplay] = useState(false); 
 
  // useEffect(() => { 
  //   const timer = setTimeout(() => { 
  //     setDisplay(true); 
  //   }, 2000); 
 
  //   return () => clearTimeout(timer); 
  // }, [props.handleSelect]); 


  return ( <>{<h4>{props.answer}</h4>}</>
  )
};

export default AnswerDisplay;
