import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, navigate] = useLocation();
    const { login, isLogged, isLoginLoading, hasLoginError } = useUser();
    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password });
        //alert(`${username}, ${password}`);
        //navigate("/");
    };
    useEffect(() => {
        if (isLogged) navigate("/");
    }, [isLogged, navigate]);

    return (
        <>
            <h2>Login</h2>
            {isLoginLoading && <strong>Checking credentials</strong>}
            {!isLoginLoading && (
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <button>Login</button>
                </form>
            )}
            {hasLoginError && <strong>Credential are invalid</strong>}
        </>
    );
}
