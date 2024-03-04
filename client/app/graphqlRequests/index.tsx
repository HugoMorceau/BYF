export default function queryGraphql(query: string) {
  const graphql_url = "http://localhost:3000/graphql";
  fetch(graphql_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Erreur:", error));
}
