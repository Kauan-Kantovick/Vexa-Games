import { useTranslation } from 'react-i18next';
import gamesBase from './data/games.json';

// Importa os dicionários de conteúdo por idioma
import gamesEn from './data/locales/games.en.json';
import gamesPtBR from './data/locales/games.pt-BR.json';
import gamesEs from './data/locales/games.es.json';
import gamesRu from './data/locales/games.ru.json';

const translations = {
  'en': gamesEn,
  'pt-BR': gamesPtBR,
  'es': gamesEs,
  'ru': gamesRu
};

export function useGamesMerge() {
  const { t } = useTranslation();
  
  // Identifica o idioma ativo ou usa 'en' como fallback
  const currentLang = translations[t.language] ? t.language : 'en';
  const localizedData = translations[currentLang];

  // Mescla o dado fixo do jogo com a tradução correspondente ao seu ID
  const localizedGames = gamesBase.map(game => ({
    ...game,
    ...localizedData[game.id]
  }));

  return localizedGames;
}