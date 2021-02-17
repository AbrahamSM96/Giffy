import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import { useGifs } from "hooks/useGifs";
const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
    //navegar a otra ruta
    console.log(keyword);
  };
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here"
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <button>Buscar</button>
      </form>
      <h3 className="App-title">Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs más populares</h3>
      <div className="App-category">
        <TrendingSearches />
      </div>
    </>
  );
}
