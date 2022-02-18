import React from 'react'
import verefySub from '../../HOOC/verefySub'
import withAuth from '../../HOOC/withauth'
import HeaderAccount from '../../components/header/HeaderAccount'
import MyMovies from '../../components/MyMovies'
import HeaderLogo from '../../components/header/HeaderLogo/HeaderLogo'
import styles from './index.module.scss'
const index = () => {

  return (
    <div className={styles.backround}>
      <HeaderLogo/>
      <HeaderAccount/>
      <MyMovies title="Tendances actuelles"></MyMovies>
      <MyMovies title="New"></MyMovies>
    </div>
  )
}

export default withAuth(verefySub(index))