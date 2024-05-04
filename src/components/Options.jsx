import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Options = (props) => {

  return (
<>
<select className="dropdown" onChange={props.handleSelect}><option value="film">Film</option>
<option value="character">Character</option>
<option value="planet">Planet</option>
<option value="ship">Ship</option>
</select>
    </>
  );
};

export default Options;
