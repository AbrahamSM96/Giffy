import { useCallback, useContext } from "react";
import Context from "context/UserContext";
import loginService from "services/login";
export default function useUser() {
    const { jwt, setJwt } = useContext(Context);
    const login = useCallback(
        ({ username, password }) => {
            loginService({ username, password })
                .then((jwt) => {
                    console.log(jwt, "JWT");
                    setJwt(jwt);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        [setJwt],
    );

    const logout = useCallback(() => {
        setJwt(null);
    }, [setJwt]);
    return {
        isLogged: Boolean(jwt),
        login,
        logout,
    };
}
