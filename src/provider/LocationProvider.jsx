import { useState } from "react";
import { LocationContext } from "../context";

export default function LocationProvider({ children }) {
    const [selectedLocation, setSelectedLocation] = useState({
        location: '',
        latitude: 0,
        longitude: 0,
    })
  const state = {selectedLocation, setSelectedLocation};
  return (
    <LocationContext.Provider value={state}>
      {children}
    </LocationContext.Provider>
  );
}
