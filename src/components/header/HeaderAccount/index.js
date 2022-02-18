import React, { useEffect, useState } from 'react';
import styles from "./HeaderAccount.module.scss";
import { PlayArrowRounded } from '@material-ui/icons';
import { InfoOutlined } from '@material-ui/icons';
/* import QuickView from '../../quick/QuickView/QuickView';
 */
import { getMovies } from '../../../graphql/queries/movies';
import { useQuery } from '@apollo/client';

const index = () => {
    const [movie, setMovie] = useState({});
    const [popup, setPopup] = useState(false);
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

    function handleClick() {
        popup ? setPopup(false) : setPopup(true);
    }
    

    const headerStyle = {
        backgroundImage: `url(${movie.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }



    return (
 
         <header className={styles.header} style={headerStyle}>
            <div className={styles.header__container}>
                <h1 className={styles.header__title}>{movie.title}</h1>
                <p className={styles.header__description}>
                    une discription
                </p>
                <div className={styles.header__buttons}>
                    <button className={`${styles.header__button} ${styles.header__button__play}`}><PlayArrowRounded></PlayArrowRounded>Lecture</button>
                    <button className={styles.header__button} onClick={handleClick}><InfoOutlined></InfoOutlined>Plus d'info</button>
                </div>
            </div>
            </header> 
    )
}

export default index;