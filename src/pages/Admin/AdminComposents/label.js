import React from 'react'
import styles from './label.module.scss'

const Label = (props) => {

  return (
    <div className={styles.label}>
        
        <label>{props.id}</label>
        <label>{props.name}</label>
        
        <div className={styles.img_groupe}>
        <label>{props.action}</label>
        <img src={props.delete}/>
        <img src={props.more}/>
        </div>
    </div>
  )
}



export default Label
