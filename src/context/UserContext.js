import React, { useState } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
    // el estado inicial debe de ser una funcion ya que solo se ejecutara 1 vez
    // y sin estar en funcion se ejecutaria cada vez
    const [jwt, setJwt] = useState(() => window.sessionStorage.getItem("jwt"));
    const [favs, setFavs] = useState([]);

    return <Context.Provider value={{ favs, setFavs, jwt, setJwt }}>{children}</Context.Provider>;
}

export default Context;
