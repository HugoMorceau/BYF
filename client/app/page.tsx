// activate nextjs client rendering
"use client";

export default function Home() {
  const fetchData = async () => {
    // URL de l'endpoint GraphQL
    const GRAPHQL_URL = "http://localhost:3000/graphql";

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
  };
  return (
    <main>
      <div> hello world </div>
      <button onClick={() => fetchData()}> click me </button>
    </main>
  );
}
