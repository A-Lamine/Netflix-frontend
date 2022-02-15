import React, { useState } from 'react';
import Router from "next/router"
import styles from "./index.module.scss"
import HeaderLogo from '../components/header/HeaderLogo/HeaderLogo';
import HeaderToolbar from '../components/header/HeaderToolbar/HeaderToolbar';
import chevronright from '../../public/chevron-right.png'
import Separator from '../components/separator'
import HomeTV from '../components/Hometv'
import HomeMobile from '../components/HomeMobile'
import HomeMac from '../components/HomeMac'
import HomeJeunesse from '../components/HomeJeunesse'

const index = () => {
    const [email,setemail] = useState(null)

    const handelsubmit = (e) =>{
        e.preventDefault()
        
        localStorage.setItem("email",email)
        Router.push("/signup")
    }

    return (
        <div>
        <div className={styles.body}>
            <header className={styles.header__main}>
                <HeaderLogo />
                <HeaderToolbar />
            </header>
            <div className={styles.card}>
                <h1 className={styles.h1}>
                    Films, séries TV et bien plus en illimité.
                </h1>
                <h2 className={styles.h2}>
                    Où que vous soyez. Annulez à tout moment.
                </h2>
                <div className={styles.form}>
                    <h3 className={styles.h3}>
                        Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour
                        vous abonner ou réactiver votre abonnement.
                    </h3>
                    <div className={styles.email_form}>
                        <input type="email" className={styles.email} onChange={(e)=>setemail(e.target.value)} placeholder='Adresse e-mail' />
                        <button className={styles.btn_begin} onClick={handelsubmit}>
                            <a className={styles.a} href='/'>Commancer</a>
                            <img src={chevronright.src}/>
                        </button>
                    </div>

                </div>
            </div>
        </div>
                    <Separator />
                    <HomeTV />
                    <Separator />
                    <HomeMobile />
                    <Separator />
                    <HomeMac />
                    <Separator />
                    <HomeJeunesse/>
                    </div>
    );
};

export default index;