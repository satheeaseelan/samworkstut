import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import { useState } from 'react';
export default function Home() {
  const [articles, setArticles] = useState([]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Samworks.in - Javascript Tutorials</title>
        <meta name="description" content="Javascript Tutorials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        
        <p className={styles.description}>
          Get started learn Javascript
        </p>

        <div className={styles.grid}>
          <Link href="/articles" >
            <a className={styles.card}>
              <h2>Articles &rarr;</h2>
              <p>Find in-depth information about Javascript related Articles.</p>
            </a>
          </Link>
          <Link href="/tutorials" >
          <a className={styles.card}>
            <h2>Tutorials &rarr;</h2>
            <p>Learn about new javascript frameworks courses!</p>
          </a>
          </Link>
          <Link href="/aboutus" >
          <a
            className={styles.card}
          >
            <h2>About Us &rarr;</h2>
            <p>About me.</p>
          </a>
          </Link>
          <Link href="/contactus" >
          <a
            className={styles.card}
          >
            <h2>Contact Us &rarr;</h2>
            <p>
              Catch Me.
            </p>
          </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
          <a href="http://www.samworks.in" rel="noopener noreferrer"> Powered by{' '} www.samworks.in </a>
        </footer>
    </div>
  )
}
