import React, { useRef } from "react";

export const ApiClientContext = React.createContext();

export const ApiClientProvider = ({ children }) => {
  const apiClient = useRef({
    fetchMovies: () => fetch("https://swapi.co/api/films/"),
    fetchPlanets: planets => planets.map(planet => fetch(planet))
  });

  return (
    <ApiClientContext.Provider value={apiClient.current}>
      {children}
    </ApiClientContext.Provider>
  );
};
