import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function GamePage() {
  const { id } = useParams();
  const [game, setGame] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games/" + id)
      .then((response) => response.json())
      .then((data) => setGame(data));
  }, []);

  return (
    <>
      <h1>Page of game whit id = {id}</h1>

      <p>{game.name}</p>

    </>
  );
}

export default GamePage;