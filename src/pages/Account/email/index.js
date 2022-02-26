import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Input from '../../../components/UI/Input';
import styles from '../../login/index.module.scss'
import nwstyles from '../password/index.module.scss'
import HeaderConecte from '../../../components/header/HeaderConecte'


function Index() {
    const router = useRouter();
    const [email,setEmail] =  useState(  typeof window !== "undefined" ? (JSON.parse(localStorage.getItem('token')).email) : null);
    const [token, setToken] = useState(  typeof window !== "undefined" ? (JSON.parse(localStorage.getItem('token'))) : null);
    
   /*  localStorage.setItem('token') */
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("token", JSON.stringify(token))
        alert('email modifier')
        router.push("/Account")
        
    }
    return (
        
        <div>
           
            <div className={nwstyles.body}>
                <HeaderConecte />
                <div className={styles.signinform}>
                   <div className={nwstyles.pad}> <h1 className={styles.formh1}>Modifier l&apos;adresse mail</h1></div>
                    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    <Input
                            type="text"
                            label="mon email"
                            id="email"
                            name="Adresse mail"
                            value={email}
                            
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
                            onChange={(e) => {
                                setToken({...token,email:e.target.value})
                                
                            }}

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

export default Index