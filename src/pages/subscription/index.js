import React from 'react'
import HeaderLogo from "../../components/header/HeaderLogo/HeaderLogo"
import HeaderToolbar from "../../components/header/HeaderToolbar/HeaderDisc"
import styles from "./index.module.scss"
import Checkmarque from "../../../public/checkmarque"

console.log(Checkmarque)
function index() {
    return (
        <div className={styles.body}>
            <header className={styles.header__main}>
                <HeaderLogo />
                <HeaderToolbar />
            </header>
            

            <div className={styles.panelcenter}>
                <div className={styles.planformcontainer}>
                    <div className={styles.informations}>
                        <div className={styles.h1}>
                            Sélectionnez le forfait qui vous convient
                        </div>
                        <div className={styles.liste}>
                            <div className={styles.info_flex}>
                                <div className={styles.checkmarque}><Checkmarque /></div>
                                <div className={styles.info}>Regardez autant que vous voulez. Sans publicité.</div>
                            </div>
                            <div className={styles.info_flex}>
                                <div className={styles.checkmarque}><Checkmarque /></div>
                                <div className={styles.info}>Recommandations personnalisées.</div>
                            </div>
                            <div className={styles.info_flex}>
                                <div className={styles.checkmarque}><Checkmarque /></div>
                                <div className={styles.info}>Changez ou annulez votre forfait à tout moment.</div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.tableau}>
                        <div className={styles.tableau_row1}>
                            <input type="button" className={styles.row_btn} value="Standard"></input>
                            <input type="button" className={styles.row_btn} value="Premium"></input>

                        </div>
                        <div className={styles.tableau_row2}>
                            <div>
                            <span>Abonnement mensuel</span>
                            </div>
                            <div className={styles.offres}>
                            <div className='a'>8,99</div>
                            <div className='b'>13,49</div>
                            </div>
                        </div>

                        <div>

                        </div>

                        <div>

                        </div>

                        <div>

                        </div>
                    </div>

                    <div className={styles.soustable}>
                        La disponibilité de la HD (720p), de la Full HD (1080p), de l'Ultra HD (4K) et de la HDR dépend de votre connexion Internet et des capacités de l'appareil. Tous les contenus ne sont pas disponibles dans toutes les résolutions. Pour en savoir plus, veuillez consulter nos Conditions d'utilisation.
                    </div>
                    <div className={styles.soustable}>
                        Seules les personnes qui vivent avec vous peuvent utiliser votre compte. Regardez Netflix en simultané sur 4 appareils différents avec le forfait Premium, sur 2 avec le forfait Standard, et sur 1 avec le forfait Essentiel.
                    </div>

                </div>
                <div className={styles.btncontainer}>
                    <button className={styles.btn_next}>Suivent</button>
                </div>

            </div>

        </div>
    )
}

export default index