import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RenderingCardsGames from "../../components/RenderCardsGames";

function Catalog() {
  const [games, setGames] = useState([]);

  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState(search);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  useEffect(() => {
    const consultation = games.filter((game) =>
      game.name.toLowerCase().includes(search.toLowerCase()),
    );

    setFilteredSearch(consultation);
  }, [search]);

  return (
    <>
      <h1>Catalog</h1>
      <Link to="/cart">View Cart</Link>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search game..."
        style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
      />
      
      <RenderingCardsGames games={filteredSearch? filteredSearch : games } />

      {filteredSearch.length === 0 && <p>No game founded</p>}

    </>
  );
}

export default Catalog;
