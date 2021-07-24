import { useCallback, useContext, useState } from "react";
import Context from "context/UserContext";
import loginService from "services/login";
import addFavService from "services/addFav";
export default function useUser() {
    const { favs, setFavs, jwt, setJwt } = useContext(Context);
    const [state, setState] = useState({ loading: false, error: false });
    const login = useCallback(
        ({ username, password }) => {
            setState({ loading: true, error: false });
            loginService({ username, password })
                .then((jwt) => {
                    window.sessionStorage.setItem("jwt", jwt);
                    setState({ loading: false, error: false });
                    console.log(jwt, "JWT");
                    setJwt(jwt);
                })
                .catch((err) => {
                    window.sessionStorage.removeItem("jwt");

                    setState({ loading: false, error: true });

                    console.log(err);
                });
        },
        [setJwt],
    );
    const addFav = useCallback(
        ({ id }) => {
            addFavService({ id, jwt })
                .then((favs) => setFavs(favs))
                .catch((err) => {
                    console.log(err);
                });
        },
        [jwt, setFavs],
    );

    const logout = useCallback(() => {
        window.sessionStorage.removeItem("jwt");
        setJwt(null);
    }, [setJwt]);
    return {
        addFav,
        favs,
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout,
    };
}
