import React from "react";
import "./App.css";
import Header from "components/Header";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import StaticContext from "./context/StaticContext";

import { Link, Route } from "wouter";
import { UserContextProvider } from "context/UserContext";
import { GifsContextProvider } from "./context/GifsContext";

import logo from "./logo.png";

export default function App() {
    return (
        <UserContextProvider value={{ name: "ABRAHAM", sus: true }}>
            <div className="App">
                <section className="App-content">
                    <Header />
                    <Link to="/">
                        <img className="App-logo" alt="Giffy logo" src={logo} />
                    </Link>
                    <GifsContextProvider>
                        <Route component={Home} path="/" />
                        <Route component={SearchResults} path="/search/:keyword/:rating?" />
                        <Route component={Detail} path="/gif/:id" />
                        <Route component={Login} path="/login" />
                        <Route component={() => <h1>404 error :(</h1>} path="/404" />
                    </GifsContextProvider>
                </section>
            </div>
        </UserContextProvider>
    );
}
