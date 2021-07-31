import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header';
export default function Articles({ articles }) {
    return (<div className={styles.container}>
        <Head>
            <title>Articles - Samworks</title>
            <meta name="description" content="Javascript Tutorials" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to Articles page
            </h1>
            
            <div className={styles.grid}>
                { articles.map((item) =>(<Link href={`/articles/${item.id}`} key={item.id}><a key={item.id} className={`${styles.card} ${styles.subcard}`}>
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
    const response = await fetch("https://610510704b92a000171c5dfc.mockapi.io/articles");
    const data = await response.json();
    return {
        props: {
            articles: data
        }
    }

}