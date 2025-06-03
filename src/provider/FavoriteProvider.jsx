import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorite = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavorite = (location) => {
    setFavorites(favorites.filter((f) => f.location !== location));
  };

  const state = {
    favorites,
    addToFavorite,
    removeFromFavorite,
  };
  return (
    <FavoriteContext.Provider value={state}>
      {children}
    </FavoriteContext.Provider>
  );
}
