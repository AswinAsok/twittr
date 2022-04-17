import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Body from "../components/Body/Body";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twittr</title>
        <meta
          name="description"
          content="Made by Aswin, Ashwin and Govind for Tinkerhub Saturday Hacknight with passion"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Body />

  
    </div>
  );
}
