import { useEffect, useState } from "react";
import { useGifs } from "hooks/useGifs";
import getSingleGif from "services/getSingleGif";

//le pasaremos el id
export default function useSingleGif({ id }) {
  //recuperamos todos los gifs
  const { gifs } = useGifs();
  //de los gif buscame si el id del parametro es igual a alguno de todos los gifs
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);
  //el estado inicial sera el valor de cache si es que esta disponible
  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    //si no tenemos el gif o no existe en la gitFromCache hacemos la peticion a la API
    if (!gif) {
      setIsLoading(true);
      //llamar al servicio si no tenemos gif
      getSingleGif({ id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);

  return { gif, isLoading, isError };
}
