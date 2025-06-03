import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherProvider } from "./provider";

function App() {
  return (
    <div className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
      <WeatherProvider>
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </WeatherProvider>
    </div>
  );
}

export default App;
