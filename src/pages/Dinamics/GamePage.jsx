import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RenderingPageGame from "../../components/RenderPageGame";

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
        <RenderingPageGame game={game} />
    </>
  );
}

export default GamePage;