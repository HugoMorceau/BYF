// activate nextjs client rendering
"use client";
import style from "./page.module.scss";

export default function Home() {
  const fetchData = async () => {
    const GRAPHQL_URL = "http://localhost:3000/graphql";
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
    const CREATE_USER_MUTATION = `
    mutation {
      createUser(createUserInput: {
        firstName: "Bernard",
        lastName: "Doe",
        email: "john.doe@example.com",
        
      }) {
        id
        firstName
        lastName
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
        // query: CREATE_USER_MUTATION,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Erreur:", error));
  };
  return (
    <>
      <header>
        <nav className={style.navMenu}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/predictions">Predictions</a>
            </li>
            <li>
              <a href="/users">Users</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className={style.mainContainer}>
          <button onClick={() => fetchData()}> Show Predictions </button>
          <button onClick={() => fetchData()}> Show Users</button>
          <button onClick={() => fetchData()}> click me </button>
        </div>
      </main>
    </>
  );
}
