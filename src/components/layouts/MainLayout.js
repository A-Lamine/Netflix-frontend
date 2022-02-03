import React from 'react';
import HeaderLogo from '../header/HeaderLogo/HeaderLogo';
import HeaderToolbar from '../header/HeaderToolbar/HeaderToolbar';
import styles from "./MainLayout.module.scss";
import Footer from '../Footer/Footer';


const Mainlayout = ({ children }) => {
    return (
        <>
            
                <header className={styles.header__main}>
                    <HeaderLogo />
                    <HeaderToolbar />
                </header>
                <main>
                    <div className={styles.container}>
                        {children}
                    </div>
                </main>
                <footer>
                    <Footer/>
                </footer>
           
        </>
    );
}

export default Mainlayout;
