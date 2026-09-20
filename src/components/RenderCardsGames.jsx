import RenderingGameGenres from "./RenderGameGenres";

function RenderingCardsGames({ games }) {
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
