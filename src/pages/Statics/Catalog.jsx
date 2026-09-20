import { Link } from "react-router"
import { useState, useEffect } from "react"
import RenderingCardsGames from "../../components/RenderCardsGames";

function Catalog() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then((response) => response.json())
    .then((data) => setGames(data));
  }, []);

  return (
    <>
      <h1>Catalog</h1>

      <Link to="/cart">View Cart</Link>

      <RenderingCardsGames games={games}/>
    </>
  )
}

export default Catalog
