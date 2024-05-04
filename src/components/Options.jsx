import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Options = () => {
  const [] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <select onSelect={handleSelect} className="dropdown">
        <option eventKey="Select option">Select Option</option>

        <option eventKey="Film">Film</option>
        <option eventKey="Character">Character</option>
        <option eventKey="Ship">Ship</option>
      </select>
    </>
  );
};

export default Options;
