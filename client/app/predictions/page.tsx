"use client";
import styles from "./page.module.scss";
import queryGraphql from "../graphqlRequests";

const getPredictionsQuery = `query {
  predictions {
    id
    title
    description
  }
}`;

export default function Predictions() {
  return (
    <>
      <div className={styles.users}>predictions component</div>
      <button onClick={() => queryGraphql(getPredictionsQuery)}> Show Predictions </button>
    </>
  );
}
