function RenderingCardsGames({ games }) {
  console.log(games);
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

          </div>
        </div>
      </div>
    );
  });
}

export default RenderingCardsGames;
