import { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header';
export default function Tutorials({tutorials}) {
    return (<div className={styles.container}>
        <Head>
            <title>Tutorials - Samworks</title>
            <meta name="description" content="Javascript Tutorials" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to Tutorials page
            </h1>
            <div className={styles.grid}>
                { tutorials.map((item) =>(<Link href={`/tutorials/${item.id}`} key={item.id}><a key={item.id} className={`${styles.card} ${styles.subcard}`}>
                    <h2>{item.name} &rarr;</h2>
                </a></Link>)) }
          </div>
        </main>
        <footer className={styles.footer}>
          <a href="http://www.samworks.in" rel="noopener noreferrer"> Powered by{' '} www.samworks.in </a>
        </footer>
    </div>)
}
export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/tutorials");
    const data = await response.json();
    return {
        props: {
            tutorials: data
        }
    }

}