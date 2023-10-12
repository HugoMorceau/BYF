// URL de l'endpoint GraphQL
const GRAPHQL_URL = "http://localhost:3100/graphql";

// Exemple de requête GraphQL
const GET_DATA_QUERY = `
  query {
    users {
      id,
      firstName,
      lastName,
      email
    }
  }
`;

fetch(GRAPHQL_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query: GET_DATA_QUERY,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erreur:", error));
