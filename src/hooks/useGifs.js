import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);
  const keywordToUse = keyword
    ? keyword
    : localStorage.getItem("lastKeyword") || "random";
  useEffect(
    function () {
      setLoading(true);
      //recuperamos la keyword de localstorage
      // al final si no ha buscado nada anteriormente que busque random

      getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        //guardamos la keyword en el localstorage
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, keywordToUse, setGifs, rating]
  );

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);
    getGifs({ keyword: keywordToUse, rating, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs, rating]);
  return { loading, loadingNextPage, gifs, setPage };
}
