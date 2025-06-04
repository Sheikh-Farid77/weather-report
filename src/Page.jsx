import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";
import ClearImage from "./assets/backgrounds/clear-sky.jpg";
import CloudImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyImage from "./assets/backgrounds/rainy-day.jpg";
import ScatteredImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import SunnyImage from "./assets/backgrounds/sunny.jpg";
import ThunderImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyImage;
      case "Clouds":
        return ScatteredImage;
      case "Clear":
        return ClearImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return CloudImage;
      case "Mist":
        return MistImage;
      case "Sunny":
        return SunnyImage;
      default:
        return ClearImage;
    }
  }

  useEffect(() => {
    const image = getBackgroundImage(weatherData.climate);
    setClimateImage(image);
  }, [weatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-center font-semibold text-4xl">
            {loading.message}
          </p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className="bg-body font-[Roboto] text-light bg-[url()] bg-no-repeat bg-cover h-screen grid place-items-center"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
