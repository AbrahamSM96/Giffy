import React from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import "./Fav.css";
export default function Fav({ id }) {
    const { isLogged } = useUser();
    const [, navigate] = useLocation();
    const handleClick = () => {
        if (!isLogged) return navigate("/login");
        alert(id);
    };
    return (
        <button className="gf-Fav" onClick={handleClick}>
            <span role="img" aria-label="Fav Gif">
                ❤️
            </span>
        </button>
    );
}
