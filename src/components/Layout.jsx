import React from "react";

const Layout = (props) => {


  if(!props.selectedOption)
  return <p>Loading...</p>
  if (props.selectedOption="film")
  return <><p>{props.film.title}</p></>;
  if (props.selectedOption="character")
  return <><p>{props.character.name}</p></>;
  if (props.selectedOption="planet")
  return <><p>{props.planet.name}</p></>;
  if (props.selectedOption="ship")
  return <><p>{props.ship.name}</p></>;
};

export default Layout;
