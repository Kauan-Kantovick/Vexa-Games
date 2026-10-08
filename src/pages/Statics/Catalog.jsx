import { Link } from "react-router";
import { useState, useEffect } from "react";
import RenderingCardsGames from "../../components/RenderCardsGames";
import { useTranslation } from "react-i18next";

function Catalog() {
  const { t } = useTranslation();
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => {
          setGames(data);
      });
  }, []);

  const gamesList = games;
  
  const filteredGames = gamesList.filter((game) =>
    game.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>  
      <h1>{t("Catalog.pageTitle")}</h1>
      <Link to="/cart">{t('Catalog.cartPath')}</Link>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder={t("Catalog.searchPlaceholder")}
        style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
      />
      
      <RenderingCardsGames games={filteredGames} />

      {filteredGames.length === 0 && <p>{t("Catalog.noGamesMessage")}</p>}
    </>
  );
}

export default Catalog;
