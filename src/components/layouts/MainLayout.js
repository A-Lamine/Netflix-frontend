import React from 'react';
import styles from "./MainLayout.module.scss";
import Footer from '../Footer/Footer';
import Separator from '../separator'
import HomeTV from '../Hometv'
import HomeMobile from '../HomeMobile'
import HomeMac from '../HomeMac'

const Mainlayout = ({ children }) => {
    return (
        <>
            <main>
                <div>
                    {children}
                </div>
            </main>
            <Separator />
            <HomeTV />
            <Separator />
            <HomeMobile />
            <Separator />
            <HomeMac />
            <Separator />
            <footer>
                <Footer />
            </footer>

        </>
    );
}

export default Mainlayout;
