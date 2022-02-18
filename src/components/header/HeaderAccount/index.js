import React, { useEffect, useState } from 'react';
import PlayIcon from './PlayIcon';
import InfoIcon from './InfoIcon';
import { getMovies } from '../../../graphql/queries/movies';
import { useQuery } from '@apollo/client';
import styles from './index.module.scss';




const index = () => {


    const [movie, setMovie] = useState({});
    const { loading, error, data } = useQuery(getMovies);

    useEffect(() => {
        if (loading) {
            return "loading...";
        }

        if (error) {
            console.log(error);
            return null;
        }

        setMovie(data.getMovies[Math.floor(Math.random() * data.getMovies.length)])

    });
    

    return (
            <div className={styles.billboard}>
                <div className={styles.innerBillboard}>
                    <img src={movie.background} alt="" />
                    <div className={styles.fadeOut}></div>
                    <div className={styles.info}>
                        <div className={styles.title}> {movie.title} </div>
                        <div className={styles.description}>
                            {movie.description}
                        </div>
                        <div className={styles.links}>
                            <a href="#">
                                <PlayIcon />
                                <span>Play</span>
                            </a>
                            <button type="button">
                                <InfoIcon />
                                <span>More Info</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
           
    );
};

export default index;