import React from 'react';
import styles from "./HeaderToolbar.module.scss";


const HeaderToolbar = (props) => {

    return (
        <div>
           
                <button className={styles.btn_login}> <a href='/login'>S'identifier</a></button>
            
        </div>
    );

}

export default HeaderToolbar;