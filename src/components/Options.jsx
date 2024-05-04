import { useState } from "react";


const Options = (props) => {
  return (
    <>
      <select className="dropdown" onChange={props.handleSelect}>
        <option value="">Select Option</option>
        <option value="film">Film</option>
        <option value="character">Character</option>
        <option value="planet">Planet</option>
        <option value="ship">Ship</option>
      </select>
    </>
  );
};

export default Options;
