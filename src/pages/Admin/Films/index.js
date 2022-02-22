import React from 'react'
import styles from '../index.module.scss'
import Header from '../AdminComposents/header'
import Nav from '../AdminComposents/nav'
import style from '../Categories/index.module.scss'
import Label from '../AdminComposents/label'
import { getMovies } from '../../../graphql/queries/movies'
import { useQuery } from '@apollo/client';
import Delete from '../../../../public/delete.png'
import more from '../../../../public/more.png'


function index() {
    const { loading, error, data } = useQuery(getMovies);

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
                    <Label id="ID" name="Nom" action="Action"/>
                        {
                            data.getMovies.map((movie) => (
                                <>

                                    <Label key={movie.id} id={movie.id} name={movie.title} delete={Delete.src} more={more.src} />
                                    
                                </>

                            ))
                        }
                    </div>
                </div>
            </div>



        </div>
    )
}

export default index