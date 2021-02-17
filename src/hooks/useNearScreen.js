import { useEffect, useState, useRef } from "react";

export default function useNearScreen({ distance = "100px" }) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };
    //Importar de forma dinamica el intersection observer, para que no lo cargue siempre,
    //ya que el import es un pollifyl para internet explorer
    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });
      observer.observe(fromRef.current);
    });

    return () => observer && observer.disconnect();
  }, []);
  return { isNearScreen, fromRef };
}
