import React from 'react';
import hometv from "../../../public/home-mobile.jpg";
import styles from "./index.module.scss"
const index = () => {
    return (
        <div className={styles.minipage}>
            <div className={styles.minipageimgpanel}>
                <img className={styles.minipageimg} src={hometv.src} />
            </div>

            <div className={styles.minipagetext}>
                <span className={styles.minipageh1}>Téléchargez vos séries préférées pour les regarder hors connexion.
                </span>
                <span className={styles.minipagep}>Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.
                </span>
            </div>

        </div>

    );
};

export default index;