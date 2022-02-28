import React from 'react';
import styles from "./MainLayout.module.scss";
import Footer from '../Footer/Footer';
import Head from 'next/head'

const Mainlayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Netflix France</title>
                <link rel="icon" href="/icon.ico" type="image/icon type" />
            </Head>
            <main>
                <div>
                    {children}
                </div>
            </main>
            <footer>
                <Footer />
            </footer>

        </>
    );
}

export default Mainlayout;
