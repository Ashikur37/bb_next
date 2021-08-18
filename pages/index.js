import Head from "next/head";
import Image from "next/image";
import styles from "../styles/HomePage.module.scss";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <h1 className={styles.test}>Home Page</h1>
      </div>
    </div>
  );
}
