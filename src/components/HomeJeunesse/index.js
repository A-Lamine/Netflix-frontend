import React from 'react';
import homejeunesse from "../../../public/home-Jeunesse.png";
import styles from "./index.module.scss"
const index = () => {
    return (
        <div className={styles.minipage}>
            <div className={styles.minipageimgpanel}>
                <img className={styles.minipageimg} src={homejeunesse.src} />
            </div>

            <div className={styles.minipagetext}>
                <span className={styles.minipageh1}>Créez des profils pour les enfants.
                </span>
                <span className={styles.minipagep}>Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.
                </span>
            </div>

        </div>

    );
};

export default index;