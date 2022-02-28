import React, { useState } from 'react'
import styles from './index.module.scss'

function Index(props) {
    const [player, setPlayer] = useState(false)
    function click() {
        player ? setPlayer(false) : setPlayer(true)
        console.log(player)
    }
   
   
    return (
        <div>
            <img onClick={click} className={player ? styles.hiden : styles.row__posterLarge} src={props.imgsrc} alt="" />

            <div className={player ? styles.player : styles.hiden}>
               <div  className={styles.button}> <button onClick={click} >X</button></div>
                <iframe className={player ? styles.row__posterLarge : styles.hiden} src={props.vsrc} title="YouTube video player" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Index