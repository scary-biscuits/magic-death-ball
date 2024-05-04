import React from "react";


const Layout = (props) => {
  return (
    <div className="parentContainer">
      <img src="./death_star.webp" />
      <div className="display">
        <h4>{props.answer}</h4>
      </div>
    </div>
  );

};

export default Layout;
