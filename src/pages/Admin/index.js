import React from 'react'
import styles from './index.module.scss'
import Header from './AdminComposents/header'
import Nav from './AdminComposents/nav'
import categorie from '../../../public/categories.jpg'
import film from '../../../public/Film.jpg'
import Link from 'next/link'
import isAdmin from '../../HOOC/isAdmin'

function Index() {
    return (
        <div>
            <Header />
            <div className={styles.main}>
                <Nav />

                <div className={styles.panel}>
                    <div className={styles.card}>
                        <Link href='/Admin/Categories'>
                            <a>
                                <div className={styles.mycard}>
                                    <img src={categorie.src} />

                                    <h1>Gérer les Categories</h1>

                                </div>
                            </a>
                        </Link>
                        <Link href='/Admin/Films'>
                            <a>
                                <div className={styles.mycard}>
                                    <img src={film.src} />

                                    <h1>Gérer les Films</h1>

                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default isAdmin(Index)