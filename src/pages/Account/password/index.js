import React from 'react'
import Input from '../../../components/UI/Input';
import styles from '../../login/index.module.scss'
import nwstyles from './index.module.scss'
import HeaderConecte from '../../../components/header/HeaderConecte'


function index() {

    return (
        <div>
            <div className={nwstyles.body}>
                <HeaderConecte />
                <div className={styles.signinform}>
                <div className={nwstyles.pad}> <h1 className={styles.formh1}>Modifier Mot de Passe</h1></div>
                    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                        <Input
                            type="password"
                            label="Mot de passe"
                            id="password1"
                            name="password"
                            placeholder="Nouveau mot de passe"
                            required={true}

                        />

                        <Input
                            type="password"
                            label="Mot de passe"
                            id="password2"
                            name="password"
                            placeholder="Mon mot de passe"
                            required={true}


                        />
                        <input className="btn btn-Submith" type='submit' value="Valider" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default index