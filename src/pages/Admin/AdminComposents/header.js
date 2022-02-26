import React from 'react'
import LogoImg from "../../../../public/logo.svg";
import styles from "../../../components/header/HeaderLogo/HeaderLogo.module.scss"

function Header() {
  return (
    <div className={styles.header__logo}>
        <img  src={LogoImg.src} alt="Netflix"/>
    </div>
  )
}

export default Header