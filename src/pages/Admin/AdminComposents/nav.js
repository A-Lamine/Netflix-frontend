import React from 'react'
import styles from './nav.module.scss'
import Link from 'next/link'

function Nav() {

    return (
        <div>
            <div id="mySidenav" className={styles.sidenav}>
                <Link href="/Admin">
                    <a>MyDashboard</a>
                </Link>
                <Link href="/Admin/Categories">
                    <a>Gestion des Categories</a>
                </Link>
                <Link href="/Admin/Films">
                    <a>Gestion des films</a>
                </Link>
            </div>
        </div>

    )
}

export default Nav