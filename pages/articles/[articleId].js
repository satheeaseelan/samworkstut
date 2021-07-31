import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Header from '../../components/header';
function ArticleDetails({article}) {
    return (
        <div className={styles.container}>
        <Head>
            <title>Articles details- Samworks</title>
            <meta name="description" content="Javascript Tutorials" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <main className={styles.main}>
            <h1 className={styles.title}>
                {article.name}
            </h1>
        </main>
        <footer className={styles.footer}>
          <a href="http://www.samworks.in" rel="noopener noreferrer"> Powered by{' '} www.samworks.in </a>
        </footer>
    </div>
    )
}
export default ArticleDetails;
export async function getStaticPaths() {
    const response = await fetch("https://610510704b92a000171c5dfc.mockapi.io/articles");
    const data = await response.json();
    const paths = data.map(article => {
        return {
            params: {
                articleId: `${article.id}`
            }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}
export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`https://610510704b92a000171c5dfc.mockapi.io/articles/${params.articleId}`);
    const data = await response.json();
    return {
        props: {
            article: data
        }
    }

}