import React, { useState } from "react";
import css from "./SearchForm.module.css";
function SearchFrom({ onSubmit }) {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a otra ruta
    onSubmit({ keyword });
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className={css["c-search"]}>
      <button className={css["c-search-btn"]}>Buscar</button>
      <input
        className={css["c-search-input"]}
        placeholder="Search a gif here"
        onChange={handleChange}
        type="text"
        value={keyword}
      />
    </form>
  );
}

export default React.memo(SearchFrom);
