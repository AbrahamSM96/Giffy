import React, { useCallback } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import { useGifs } from "hooks/useGifs";
import SearchFrom from "components/SearchForm";

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  //Se crea SearchFrom para solo renderizar ese componente y no toda la aplicacion
  //ayuda al performance
  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
      //navegar a otra ruta
    },
    [pushLocation]
  );
  return (
    <>
      <SearchFrom onSubmit={handleSubmit} />
      <h3 className="App-title">Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs más populares</h3>
      <div className="App-category">
        <TrendingSearches />
      </div>
    </>
  );
}
