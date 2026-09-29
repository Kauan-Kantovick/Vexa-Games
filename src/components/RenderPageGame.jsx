import RenderingGameGenres from "./RenderGameGenres";

function RenderingPageGame({ game }) {
  return (
    <>
      <h1>{game.name}</h1>
      <p>Price: ${game.unitPrice}</p>
      <p>Realease date: {game.releaseDate}</p>
      <p>Developer: {game.developer}</p>
      <p>Publisher{game.publisher}</p>
      <p>Critic score: {game.criticScore}</p>
      <p>The game is Indie: {game.isIndie ? "Yes" : "No"}</p>
      <p>Description</p>
      <p>{game.description}</p>
      <p>Game Genres:</p>
      <ul>
        <RenderingGameGenres game={game} />
      </ul>
    </>
  );
}
export default RenderingPageGame;

// {
//   "id": 1,
//   "name": "The Legend of Zelda: Breath of the Wild",
//   "unitPrice": 299.9,
//   "coverImage": "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp",
//   "description": "Uma aventura de mundo aberto em Hyrule na qual Link desperta após um longo sono e parte para recuperar suas memórias e impedir a ameaça de Calamity Ganon. O jogador pode explorar livremente o mundo, resolver santuários, coletar recursos e enfrentar inimigos.",
//   "releaseDate": "2017-03-03",
//   "developer": "Nintendo",
//   "publisher": "Nintendo",
//   "trailer": "https://www.youtube.com/results?search_query=The+Legend+of+Zelda+Breath+of+the+Wild+official+trailer",
//   "genres": [
//     "Ação",
//     "Aventura",
//     "RPG",
//     "Mundo aberto"
//   ],
//   "criticScore": 97,
//   "communityScore": 8.9,
//   "ageRating": "E10+",
//   "voiceLanguages": [
//     "Inglês",
//     "Japonês",
//     "Francês (França)",
//     "Alemão",
//     "Espanhol (Espanha)",
//     "Italiano",
//     "Russo"
//   ],
//   "subtitleLanguages": [
//     "Inglês",
//     "Japonês",
//     "Francês",
//     "Alemão",
//     "Espanhol",
//     "Italiano",
//     "Russo",
//     "Holandês",
//     "Português (Brasil)",
//     "Chinês simplificado",
//     "Chinês tradicional",
//     "Coreano"
//   ],
//   "isIndie": false
// },
