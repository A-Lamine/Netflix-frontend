import React from 'react'
import styles from './nav.module.scss'
function nav() {
   


    return (
        <div>
            <div id="mySidenav" className={styles.sidenav}>
                <a href="/Admin">MyDashboard</a>
                <a href="/Admin/Categories">Gestion des Categories</a>
                <a href="/Admin/Films">Gestion des films</a>
            </div>
        </div>
        
    )
}

export default nav