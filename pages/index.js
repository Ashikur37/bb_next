import Head from "next/head";
import Image from "next/image";
import styles from "../styles/HomePage.module.scss";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <h2 className={styles.test}>Home Page</h2>
      </div>
    </div>
  );
}
