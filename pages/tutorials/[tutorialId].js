import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Header from '../../components/header';
function TutorialsDetails({tutorial}) {
    const router = useRouter();
    const tutorialId = router.query.tutorialId;
    console.log(tutorial);
    return (
        <div className={styles.container}>
        <Head>
            <title>Tutorials details- Samworks</title>
            <meta name="description" content="Javascript Tutorials" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <main className={styles.main}>
            <h1 className={styles.title}>
                {tutorial.name}
            </h1>
            <p>{tutorial.description}</p>
        </main>
        <footer className={styles.footer}>
          <a href="http://www.samworks.in" rel="noopener noreferrer"> Powered by{' '} www.samworks.in </a>
        </footer>
    </div>
    )
}
export default TutorialsDetails;
export async function getStaticPaths() {
    const response = await fetch("http://localhost:3000/api/tutorials");
    const data = await response.json();
    const paths = data.map(tutorial => {
        return {
            params: {
                tutorialId: `${tutorial.id}`
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
    const response = await fetch(`http://localhost:3000/api/tutorials/${params.tutorialId}`);
    const data = await response.json();
    return {
        props: {
            tutorial: data
        }
    }

}