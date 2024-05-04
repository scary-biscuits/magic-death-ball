import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Layout from "./components/Layout";
import "./fonts/starWarsFont.ttf";
import "./App.css";

const App = (title) => {
  const [character, setCharacter] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [film, setFilm] = useState([]);

  const getCharData = async () => {
    const { data } = await axios.get(
      `https://swapi.dev/api/people/${Math.floor(Math.random() * 100)}/`
    );
    console.log(data);
    setCharacter(data);
  };

  const getPlanetData = async () => {
    const { data } = await axios.get(
      `https://swapi.dev/api/planets/${Math.floor(Math.random() * 100)}/`
    );
    console.log(data);
    setPlanet(data);
  };

  const getFilmData = async () => {
    const { data } = await axios.get(
      `https://swapi.dev/api/films/${Math.floor(Math.random() * 10)}/`
    );
    console.log(data);
    setFilm(data);
  };

  useEffect(() => {
    getCharData();
    getPlanetData();
    getFilmData();
  }, []);

  if (!character) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {/* <p>{character.name}</p>
      <p>{planet.name}</p>
      <p>{film.title}</p> */}
      <Header />
      <Layout />
    </>
  );
};

export default App;
