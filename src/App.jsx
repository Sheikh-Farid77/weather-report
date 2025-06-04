import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import Page from "./Page";
import {
  FavoriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
