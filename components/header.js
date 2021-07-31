import styles from '../styles/Home.module.css';
import Link from "next/link";
import Submenu from "./submenu";
import { useState, useEffect } from 'react';

export default function Header(props) {
    const [selectedmenu, setSelectedmenu] = useState('');
    const [articlelist, setArticlelist] = useState([]);
    const [tutoriallist, setTutoriallist] = useState([]);
    const menuclicked = (menu) => {
        
        if(selectedmenu === menu) {
            setSelectedmenu('');
        } else {
            setSelectedmenu(menu);
        }
    }
    useEffect(async () => {
        const articlesresponse = await fetch("https://610510704b92a000171c5dfc.mockapi.io/articles");
        const articlesdata = await articlesresponse.json();
        setArticlelist(articlesdata);
        const tutorialsresponse = await fetch("https://610510704b92a000171c5dfc.mockapi.io/tutorials");
        const tutorialsdata = await tutorialsresponse.json();
        setTutoriallist(tutorialsdata);
    }, [])
    return(<div className="header">
        <header>
            <Link href="/"><a className="logo">Samworks.in</a></Link>
            <a onClick={() => menuclicked("articles")} className = {selectedmenu === "articles" ? "selected" : null}>Articles</a>
            <a onClick={() => menuclicked("tutorials")} className = {selectedmenu === "tutorials" ? "selected" : null}>Tutorials</a>
            <Link href="/aboutus"><a >About us</a></Link>
            <Link href="/contactus"><a >Contact us</a></Link>
        </header>
        {selectedmenu ? <Submenu title={selectedmenu}  listitems={selectedmenu === "articles" ? articlelist : tutoriallist} setSelectedmenu={(val)=>setSelectedmenu(val)} /> : null}
        </div>
    )
}