import React from 'react'
import HeaderLogo from "../../components/header/HeaderLogo/HeaderLogo"
import HeaderToolbar from "../../components/header/HeaderToolbar/HeaderDisc"
import styles from "./index.module.scss"
import Separator from "../../components/separator"
function index() {
    return (
        <div className={styles.body}>
            <header className={styles.header__main}>
                <HeaderLogo />
                <HeaderToolbar />
            </header>
            <Separator />

            <div className={styles.panelcenter}>
                <div className={styles.planformcontainer}>
                    <div className={styles.informations}>
                        <div className={styles.h1}>
                            Sélectionnez le forfait qui vous convient
                        </div>
                        <div className={styles.liste}>
                            <div className={styles.info}>Regardez autant que vous voulez. Sans publicité.</div>
                            <div className={styles.info}>Recommandations personnalisées.</div>
                            <div className={styles.info}>Changez ou annulez votre forfait à tout moment.</div>
                        </div>
                        
                    </div>
                    <div className={styles.tableau}>
                        

                    </div>

                </div>
                <div className={styles.btncontainer}>
                    <button className='btn btn-Submith'>Suivent</button>
                </div>

            </div>

        </div>
    )
}

export default index