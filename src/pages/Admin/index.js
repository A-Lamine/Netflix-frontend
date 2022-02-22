import React from 'react'
import styles from './index.module.scss'
import Header from './AdminComposents/header'
import Nav from './AdminComposents/nav'
import categorie from '../../../public/categories.jpg'
import film from '../../../public/Film.jpg'
function index() {
    return (
        <div>
            <Header />
            <div className={styles.main}>
                <Nav />

                <div className={styles.panel}>
                    <div className={styles.card}>
                        <a href='/Admin/Categories'>
                            <div className={styles.mycard}>
                                <img src={categorie.src} />

                                <h1>Gérer les Categories</h1>

                            </div>
                        </a>
                        <a href='/Admin/Films'>
                            <div className={styles.mycard}>
                                <img src={film.src} />

                                <h1>Gérer les Films</h1>

                            </div>
                        </a>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default index