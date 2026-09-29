import RenderingGameGenres from "./RenderGameGenres";
import { useNavigate } from "react-router-dom";

function RenderingCardsGames({ games }) {
  
  const navigate = useNavigate();

  return games.map((game) => {
    return (
      <div key={game.id}>
        <h3>{game.name}</h3>

        <div>
          <div>
            <img src={game.coverImage} alt={game.name} />
            <p>
              <strong>Price: </strong>
              R${game.unitPrice}
            </p>

            <p>
              <strong>Release date: </strong>
              {game.releaseDate}
            </p>

            <p>
              <strong>Critic score: </strong>
              {game.criticScore}
            </p>

            <button onClick={() => navigate(`/gamepage/${game.id}`)}>Ir para a adwoadp</button>

            <p>
              <strong>Genres</strong>
            </p>
            <ul>
                <RenderingGameGenres game={game} />
            </ul>

          </div>
        </div>
      </div>
    );
  });
}

export default RenderingCardsGames;
