import { useEffect, useRef } from "react";

export default function useSEO({ description, title }) {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(
    document.querySelector('meta[name="description"').getAttribute("content")
  );
  //Actualiza el title del documento
  useEffect(() => {
    const previousTitle = prevTitle.current;
    if (title) {
      document.title = `${title} | Giffy`;
    }
    //cuando se desmonte el componente usara el previous title, por eso le pasamos un return
    return () => (document.title = previousTitle);
  }, [title]);
  //Actualiza la descripcion del documento
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"');
    const previousDescription = prevDescription.current;
    if (description) {
      metaDescription.setAttribute("content", description);
    }
    return () => metaDescription.setAttribute("content", previousDescription);
  }, [description]);
}
