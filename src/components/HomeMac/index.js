import React from 'react';
import homemac from "../../../public/home-imac.jpg";
import styles from "./index.module.scss"
const index = () => {
    return (
        <div className={styles.minipage}>
            <div className={styles.minipagetext}>
                <span className={styles.minipageh1}>Où que vous soyez.</span>
                <span className={styles.minipagep}>Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris.</span>
            </div>
            <div className={styles.minipageimgpanel}>
                <img className={styles.minipageimg} src={homemac.src}/>
            </div>
        </div>
        
    );
};

export default index;