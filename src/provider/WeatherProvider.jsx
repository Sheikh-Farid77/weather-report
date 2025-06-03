import { WeatherContext } from "../context";
import useWeather from "../hooks/useWeather";

export default function WeatherProvider({children}){
    const {weatherData, error, loading} = useWeather();


    const state = {
        weatherData,
        error,
        loading

    }
    return (
        <WeatherContext.Provider value={state}>
            {children}
        </WeatherContext.Provider>
    );
}