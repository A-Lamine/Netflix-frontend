import React from 'react';
import styles from "./MainLayout.module.scss";
import Footer from '../Footer/Footer';


const Mainlayout = ({ children }) => {
    return (
        <>
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
