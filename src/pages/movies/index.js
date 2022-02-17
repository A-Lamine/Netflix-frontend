import React from 'react'
import verefySub from '../../HOOC/verefySub'
import withAuth from '../../HOOC/withauth'
import HeaderAccount from '../../components/header/HeaderAccount'
import MyMovies from '../../components/MyMovies'

const index = () => {

  return (
    <div>
      <HeaderAccount/>
      <MyMovies title="Tendances actuelles"></MyMovies>
      <MyMovies title="New"></MyMovies>
    </div>
  )
}

export default withAuth(verefySub(index))