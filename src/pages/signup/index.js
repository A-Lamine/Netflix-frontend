import React, { useState } from "react";
import { useRouter } from "next/router";
import authService from "../../services/auth.service";
import styles from "../login/index.module.scss";
import HeaderLogo from "../../components/header/HeaderLogo/HeaderLogo";
import Input from '../../components/UI/Input';
import fb from '../../../public/FB.png'


const index = () => {
    const router = useRouter();
    const [user, setUser] = useState(  typeof window !== "undefined" ? ({ email : localStorage.getItem("email")}) : null);

    console.log(user)
    const handleSubmit = (e) => {
        e.preventDefault();
        authService.register(user)
            .then((data) => {
                console.log(data);
                localStorage.setItem("token", data.token);
                router.push("/movies");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className={styles.body}>
            <div className={styles.header__main}>
                <HeaderLogo />
            </div>
            <div className={styles.signinform}>
                <h1 className={styles.formh1}>S'inscrire</h1>
                <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    <Input
                        type="text"
                        label="Nom"
                        id="firstName"
                        name="firstName"
                        placeholder="Mon nom"
                        required={true}
                        onChange={(e) => {
                            setUser({ ...user, firstName: e.target.value });
                        }}
                    />                           
                    <Input
                        type="email"
                        label="Email"
                        id="email"
                        name="email"
                        placeholder="Mon email"
                        value={user?.email}
                        required={true}
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                        }}
                    />

                    <Input
                        type="password"
                        label="Mot de passe"
                        id="password"
                        name="password"
                        placeholder="Mon mot de passe"
                        required={true}
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                        }}
                    />
                    <input className="btn btn-Submith" type='submit' value="S'inscrire"/>
                </form>

                <div className={styles.information}>
                    <div className={styles.remmember}>
                        <a href='https://www.instagram.com/lamine_adel/'>Besoin d'aide ?</a>
                    </div>
                    <div className={styles.fb}>
                        <a href='https://www.facebook.com/lamine.leparrin/'><img src={fb.src} className={styles.imgfb} /></a>
                        <span>S'identifer avec Facebook</span>
                    </div>
                    <div className={styles.signup}>Vous avez un compte ? <a href='/login'>Connectez-vous</a></div>
                    <div className={styles.span}>Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot. </div>
                </div>

            </div>

        </div>
    )
};

export default index;