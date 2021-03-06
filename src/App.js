import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";

import { Link, Route } from "wouter";
import { GifsContextProvider } from "./context/GifsContext";

import logo from "./logo.png";

export default function App() {
  return (
    <StaticContext.Provider value={{ name: "ABRAHAM", sus: true }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" alt="Giffy logo" src={logo} />
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
            <Route component={() => <h1>404 error :(</h1>} path="/404" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}
