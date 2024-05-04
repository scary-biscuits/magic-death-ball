import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Options = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    // <DropdownButton
    //   id="dropdown-basic-button"
    //   title={selectedOption ? selectedOption : "Select option"}
    //   onSelect={handleSelect}
    // >
    //   <Dropdown.Item eventKey="Film">Film</Dropdown.Item>
    //   <Dropdown.Item eventKey="Character">Character</Dropdown.Item>
    //   <Dropdown.Item eventKey="Ship">Ship</Dropdown.Item>
    // </DropdownButton>

    <Dropdown className="d-inline mx-2">
      <Dropdown.Toggle id="dropdown-autoclose-true" onSelect={handleSelect}>
        {selectedOption ? selectedOption : "Select option"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Film">Film</Dropdown.Item>
        <Dropdown.Item eventKey="Character">Character</Dropdown.Item>
        <Dropdown.Item eventKey="Ship">Ship</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Options;
