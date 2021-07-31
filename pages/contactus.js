import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
export default function ContactUs() {
    return (<div className={styles.container}>
        <Head>
            <title>Contact us - Samworks</title>
            <meta name="description" content="Javascript Tutorials" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to Contacus page
            </h1>
        </main>
        <footer className={styles.footer}>
          <a href="http://www.samworks.in" rel="noopener noreferrer"> Powered by{' '} www.samworks.in </a>
        </footer>
    </div>)
}