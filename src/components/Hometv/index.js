import React from 'react';
import hometv from "../../../public/home-tv.jpg";
import styles from "./index.module.scss"
const index = () => {
    return (
        <div className={styles.minipage}>
            <div className={styles.minipagetext}>
                <span className={styles.minipageh1}>Regardez Netflix sur votre TV.</span>
                <span className={styles.minipagep}>Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus.</span>
            </div>
            <div className={styles.minipageimgpanel}>
                <img className={styles.minipageimg} src={hometv.src}/>
            </div>
        </div>
        
    );
};

export default index;