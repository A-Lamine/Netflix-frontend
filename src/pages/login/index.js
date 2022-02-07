import React from 'react';
import styles from "./index.module.scss";
import HeaderLogo from "../../components/header/HeaderLogo/HeaderLogo";
import Input from '../../components/UI/Input';
import fb from '../../../public/FB.png'

const index = () => {
    return (
        <div className={styles.body}>
            <div className={styles.header__main}>
                <HeaderLogo />
            </div>
            <div className={styles.signinform}>
                <h1 className={styles.formh1}>S'identifier</h1>
                <form className={styles.form}>
                    <Input type="email" placeholder="E-mail ou numero telephone" />
                    <Input type="password" placeholder='Mot de passe' />
                    <button className="btn btn-Submith" type='submit'>S'identifier</button>
                </form>

                <div className={styles.information}>
                <div className={styles.remmember}>
                    <div className={styles.checkbox}>
                        <input type="checkbox" className={styles.check} id='remmember' />
                        <label className={styles.label} for='remmember'>Se sevenir de moi</label>
                    </div>
                    <a href='https://www.instagram.com/lamine_adel/'>Besoin d'aide ?</a>
                </div>
                <div className={styles.fb}>
                    <a href='https://www.facebook.com/lamine.leparrin/'><img src={fb.src} className={styles.imgfb}/></a>
                    <span>S'identifer avec Facebook</span>
                </div>
                <div className={styles.signup}>Première visite sur Netflix ? <a href='/signup'>Inscrivez-vous</a></div>
                <div className={styles.span}>Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot. </div>
                </div>

            </div>

        </div>
    )
};

export default index;