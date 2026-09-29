function RenderingGameGenres({ game }) {

  if (!game.genres) return <></>

  let gameGenres = game.genres;
 
  return (<>
    {gameGenres.map((genre, genreIndex) => {
        return <li key={`${genre[0]}-${genreIndex}`}>{genre}</li>;
    })}
  </>)
}

export default RenderingGameGenres;