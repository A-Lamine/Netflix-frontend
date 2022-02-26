import React from 'react'
import styles from './index.module.scss'
import Headerlogo from '../HeaderLogo/HeaderLogo'
import HeaderTolbar from '../HeaderToolbar/HeaderDisc'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import HeaderProfil from '../HeaderLogo/HeaderProfil'

function Index() {
  return (
    <div className={styles.header__main}>
      <Headerlogo />
      <HeaderMenu />
      <HeaderTolbar />
      <HeaderProfil />
    </div>
  )
}

export default Index