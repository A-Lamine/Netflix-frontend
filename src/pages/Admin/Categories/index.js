import React from 'react'
import styles from '../index.module.scss'
import Header from '../AdminComposents/header'
import Nav from '../AdminComposents/nav'
import style from './index.module.scss'
import Label from '../AdminComposents/label'
import { getCatalogues } from '../../../graphql/queries/catalogues'
import { useQuery } from '@apollo/client';
import Delete from '../../../../public/delete.png'
import more from '../../../../public/more.png'
import add from '../../../../public/add.png'


function index() {
    const { loading, error, data } = useQuery(getCatalogues);

    if (loading) {
        return "loading...";
    }

    if (error) {

        return null;
    }
    return (

        <div>
            <Header />
            <div className={styles.main}>
                <Nav />
                <div className={style.panel}>
                    <div className={style.list}>
                    <Label id="Gestion des Catalogues" more={add.src}/> 
                    <Label id="ID" name="Name" action="Action"/>
                        {
                            data.getCatalogues.map((catalogue) => (
                              

                                    <Label key={catalogue.id} id={catalogue.id} name={catalogue.name} delete={Delete.src} more={more.src} />
                                    
                                

                            ))
                        }
                    </div>
                </div>
            </div>



        </div>
    )
}

export default index