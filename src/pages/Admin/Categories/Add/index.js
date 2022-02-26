import React, { useState } from 'react'
import styles from '../../index.module.scss'
import Header from '../../AdminComposents/header'
import Nav from '../../AdminComposents/nav'
import style from '../index.module.scss'
import Label from '../../AdminComposents/label'
import Input from '../../../../components/UI/Input'
import stylesadd from './index.module.scss'
import Message from '../../../../components/UI/Message/Message'
import { Catalogue } from '../../../../graphql/mutations/catalogue';
import { useMutation } from "@apollo/react-hooks";


function index() {
    const [name, setName] = useState()

   

    const [handleSubmit, { loading, error, data }] = useMutation(Catalogue, {
        variables: {
            name: name
        }
    });

    if (loading) {
        return "loading...";
    }

    if (error) {
        alert(error)
        return null;
    }


    return (

        <div>
            <Header />
            <div className={styles.main}>
                <Nav />
                <div className={style.panel}>
                    <div className={style.list}>
                        <Label id="Nom" />
                        <form className={stylesadd.form} onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                label="Catalogue"
                                id="Catalogue"
                                name="Catalogue"
                                placeholder="Nom de la nouvelle Categorie"
                                required={true}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                            <button type="submit" className="btn btn-Submith">Ajouter</button>
                            {
                                data ? (
                                    <Message message="Categorie ajoutée avec succes" type="success" />
                                )
                                    :
                                    ""
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index