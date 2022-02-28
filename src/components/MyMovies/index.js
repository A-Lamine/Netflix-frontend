import styles from './index.module.scss';
import { getMovies } from '../../graphql/queries/movies';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import MovieCard from '../moviecard'


function Index(props) {
    const { loading, error, data } = useQuery(getMovies);


    if (loading) {
        return "loading...";
    }

    if (error) {

        return null;
    }



    return (

        <div className={styles.row}>
            <div className={styles.h1}>{props.title}</div>
            <div className={styles.row__posters}>
                {
                    data?.getMovies.map((movie) => (

                        movie?.classification.map((film) => (
                            film.name == props.title ? (
                                <MovieCard key={movie.id} imgsrc={movie.img} vsrc={movie.video}/>
                                /* <div key={movie.id}>
                                    <img onClick={click} className={player ? styles.hiden : styles.row__posterLarge} src={movie.img} alt="" />

                                    <div className={player ? styles.player : styles.hiden}>
                                        <button onClick={click} >X</button>
                                        <iframe width="100%" height="100%" src={movie.video} title="YouTube video player" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>

                                </div>
 */
                            ) : ""
                        )

                        )

                    ))
                }
            </div>
        </div>

    )
}

export default Index;