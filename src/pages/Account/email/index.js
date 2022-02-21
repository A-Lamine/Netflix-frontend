import React from 'react'
import Input from '../../../components/UI/Input';
import styles from '../../login/index.module.scss'
import nwstyles from '../password/index.module.scss'
import HeaderConecte from '../../../components/header/HeaderConecte'


function index() {

    return (
        <div>
            <div className={nwstyles.body}>
                <HeaderConecte />
                <div className={styles.signinform}>
                   <div className={nwstyles.pad}> <h1 className={styles.formh1}>Modifier l'adresse mail</h1></div>
                    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    <Input
                            type="text"
                            label="mon email"
                            id="email"
                            name="Adresse mail"
                            value="Lamine@lamine.com" 
                            onChange={(e) => {
                                
                            }}
                            
                        />
                        <Input
                            type="email"
                            label="Mot email"
                            id="email"
                            name="email"
                            placeholder="Nouvelle adresse mail"
                            required={true}

                        />
                        <Input
                            type="email"
                            label="Mot email"
                            id="email"
                            name="email"
                            placeholder="Confirmer l'adresse mail"
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