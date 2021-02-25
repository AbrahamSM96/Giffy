import React, { useCallback } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import { useGifs } from "hooks/useGifs";
import SearchFrom from "components/SearchForm";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchFrom onSubmit={handleSubmit} />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <div className="App-category">
              <TrendingSearches />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
