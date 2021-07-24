const ENDPOINT = "http://localhost:8080";

export default function addFavService({ id, jwt }) {
    return fetch(`${ENDPOINT}/favs/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
        },
        body: JSON.stringify({ jwt }),
    })
        .then((res) => {
            if (!res.ok) throw new Error("Response is NOT ok");
            return res.json();
        })
        .then((res) => {
            const { favs } = res;
            return favs;
        });
}
