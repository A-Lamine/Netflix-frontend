import React, { useState, useEffect } from "react";
import styles from './index.module.scss';
import { PlayCircleFilledRounded, Title } from '@material-ui/icons';

import { getMovies } from '../../graphql/queries/movies';
import { useQuery } from '@apollo/client';



function index(props) {
    const { loading, error, data } = useQuery(getMovies);

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }
    console.log(data)

    return (
        
        <div className={styles.row}>
        <div className={styles.h1}>{props.title}</div>
        <div className={styles.row__posters}>
                    {
                        data.getMovies.map((movie) => (
                            
                                <img key={movie.id} className={styles.row__posterLarge} src={movie.img} alt="" />
                            
                        ))
                    }
                </div>
            </div>
       
    )
}

export default index;