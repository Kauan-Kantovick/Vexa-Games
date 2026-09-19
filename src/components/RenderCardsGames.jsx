function RenderingCardsGames ({ games }) {
return games.map((game) => {
  return (
    <div key={game.id}>
      <h3>{game.name}</h3>

      <div>
        <div>
          <p>
            <strong>Price:</strong>
            R$ {game.unitPrice}
          </p>

          <p>
            <strong>Quantity:</strong>
            {game.quantity
              ? game.quantity
              : "Out of stock"}
          </p>
        </div>

        <img
          src={game.coverImage}
          alt={game.name}
        />
      </div>
    </div>
  );
});

}

export default RenderingCardsGames