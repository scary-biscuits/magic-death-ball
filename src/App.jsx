
import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'
import Header from "./components/Header";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {

  const [character, setCharacter] = useState([]);
  const [ship, setShip] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [film, setFilm] = useState([]);
 
  const getCharData = async () => {
    const { data } = await axios.get(
      `https://swapi.dev/api/people/${Math.floor(Math.random()*100)}/`
    );
    console.log(data)
    setCharacter(data);
  };

  const getPlanetData = async () => {
    const { data } = await axios.get(
      `https://swapi.dev/api/planets/${Math.floor(Math.random()*100)}/`
    );
    console.log(data)
    setPlanet(data);
  };

  const getShipData = async () => {
    const { data } = await axios.get(
      `https://swapi.dev/api/starships/${Math.floor(Math.random()*100)}/`
    );
    console.log(data)
    setShip(data);
  };

  const getFilmData = async () => {
    const { data } = await axios.get(
      `https://swapi.dev/api/films/${Math.floor(Math.random()*10)}/`
    );
    console.log(data)
    setFilm(data);
  };

  useEffect(() => {
    getCharData();
    getPlanetData();
    getShipData();
    getFilmData();
  }, []);

  // dropdown logic
  let [selectedOption, setSelectedOption] = useState("");
  const [answer, setAnswer] = useState("")

  const handleSelect = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    switch (option) {
      case "character":
        setAnswer(character.name);
        break;
        case "planet":
          setAnswer(planet.name);
          break;
          case "ship":
            setAnswer(ship.name);
            break;
            case "film":
              setAnswer(film.title);
              break;
              case "":
                setAnswer("");
                break;
    }

  };

  if (!character) {
    return <p>Loading...</p>
  }
   return (
<>
    <Header      
    handleSelect={handleSelect}
    />

<p>{answer}</p>


    </>
  );



}

export default App;
