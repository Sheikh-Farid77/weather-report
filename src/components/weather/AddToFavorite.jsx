import { useContext, useEffect, useState } from 'react';
import HeartIcon from '../../assets/heart.svg'
import RedHeartIcon from '../../assets/heart-red.svg'
import { FavoriteContext, WeatherContext } from '../../context';

export default function AddToFavorite() {
  const {addToFavorite, removeFromFavorite, favorites} = useContext(FavoriteContext);
  const {weatherData} = useContext(WeatherContext);
  const {latitude, longitude, location} = weatherData;
  const [isFav, setIsFav] = useState(false); 

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    setIsFav(found)
  }, [favorites, location])

  const handleFavorite = ()=>{
    const found = favorites.find((fav) => fav.location === location);
    if(!found){
      addToFavorite(latitude, longitude, location)
    }else{
      removeFromFavorite(location)
    }
    setIsFav(!isFav);
  }
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button onClick={handleFavorite} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span>Add to Favorite</span>
          <img src={isFav ? RedHeartIcon : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
