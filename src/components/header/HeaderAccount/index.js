import React, { useEffect, useState } from 'react';
import PlayIcon from './PlayIcon';
import InfoIcon from './InfoIcon';
import { getMovies } from '../../../graphql/queries/movies';
import { useQuery } from '@apollo/client';
import styles from './index.module.scss';




const Index = () => {

    const [player, setPlayer] = useState(false)
    const [movie, setMovie] = useState({});
    const [controll, setControll] = useState(true)
    const { loading, error, data } = useQuery(getMovies);
    const [info, setInfo] = useState(false) 

    function click() {
        player ? setPlayer(false) : setPlayer(true)
    }
    function click2(){
        info ? setInfo(false) : setInfo(true)
    }
    useEffect(() => {
        if (loading) {
            return "loading...";
        }

        if (error) {
            console.log(error);
            return null;
        }

        controll ? (setMovie(data.getMovies[Math.floor(Math.random() * data.getMovies.length)]), (setControll(false))) : null

    });


    return (
        <div className={styles.billboard}>

            <div className={player ? styles.player_panel : styles.hiden} onClick={click}>
                <div className={player ? styles.player : styles.hiden}> <iframe width="100%" height="100%" src={movie.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </div>




            <div className={`${styles.innerBillboard}`}>
                <img src={movie.background} alt="" />
                <div className={player ? styles.hiden : styles.fadeOut}></div>
                <div className={player ? styles.hiden : styles.info}>
                    <div className={styles.title}> {movie.title} </div>
                    <div className={info ? styles.description : styles.hiden}>
                        {movie.description}
                    </div>
                    <div className={styles.links}>
                        <a href="#" onClick={click}>
                            <PlayIcon />
                            <span>Play</span>
                        </a>
                        <button type="button">
                            <div onClick={click2}>
                            <InfoIcon />
                            <span>Plus d&apos;nfos</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Index;