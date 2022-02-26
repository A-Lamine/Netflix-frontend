import React, { useEffect, useState } from 'react'
import HeaderLogo from "../../components/header/HeaderLogo/HeaderLogo"
import HeaderToolbar from "../../components/header/HeaderToolbar/HeaderDisc"
import styles from "./index.module.scss"
import Checkmarque from "../../../public/checkmarque"
import withAuth from '../../HOOC/withauth'

function Index() {
    const [colorl, setColorstandard] = useState(true)
    const [colorr, setColorpremieum] = useState(false)

    function changeColorstandar() {
        setColorstandard(false);
        setColorpremieum(true);
    }

    function changeColorrPremieum() {
        setColorstandard(true);
        setColorpremieum(false);
    }


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
                                <div className={styles.info}>Changez ou annullez votre forfait à tout moment.</div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.tableau}>
                        <div className={styles.tableau_row1}>
                            <input type='button' className={`${styles.row_btn} ${styles.selected}`} onClick={changeColorstandar} value="Standard"></input>
                            <input type='button' className={`${styles.row_btn}`} onClick={changeColorrPremieum} value="Premium"></input>

                        </div>
                        <div className={styles.tableau_row2}>
                            <div>
                                <div className={styles.span}>Abonnement mensuel</div>
                            </div>
                            <div className={styles.offres}>
                                <div className={colorr ? styles.selected : null}>8,99 €</div>
                                <div className={colorl ? styles.selected : null}>17,99 €</div>
                            </div>
                        </div>

                        <div className={styles.tableau_row2}>
                            <div>
                                <div className={styles.span}>Qualité vidéo</div>
                            </div>
                            <div className={styles.offres}>
                                <div className={colorr ? styles.selected : null}>Bonne</div>
                                <div className={colorl ? styles.selected : null}>Optimal</div>
                            </div>
                        </div>

                        <div className={styles.tableau_row2}>
                            <div>
                                <div className={styles.span}>résolutions</div>
                            </div>
                            <div className={styles.offres}>
                                <div className={colorr ? styles.selected : null}>480p</div>
                                <div className={colorl ? styles.selected : null}>4K+HDR</div>
                            </div>
                        </div>

                        <div className={styles.tableau_row2}>
                            <div>
                                <div className={styles.span}>Abonnement mensuel</div>
                            </div>
                            <div className={styles.offres}>
                                <div className={colorr ? styles.selected : null}>8,99</div>
                                <div className={colorl ? styles.selected : null}>13,49</div>
                            </div>
                        </div>

                        <div className={styles.tableau_row2}>
                            <div>
                                <div className={styles.span}>Netflix sur votre TV, ordinateur, smartphone et tablette</div>
                            </div>
                            <div className={styles.offres}>
                                <div className={colorr ? styles.selected : null}><Checkmarque /></div>
                                <div className={colorl ? styles.selected : null}><Checkmarque /></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.soustable}>
                        La disponibilité de la HD (720p), de la Full HD (1080p), de l'Ultra HD (4K) et de la HDR dépend de votre connexion Internet et des capacités de l'appareil. Tous les contenus ne sont pas disponibles dans toutes les résolutions. Pour en savoir plus, veuillez consulter nos Conditions d&apos;utilisation.
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

export default withAuth(Index)