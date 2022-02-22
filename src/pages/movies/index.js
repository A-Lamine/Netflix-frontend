import React from 'react'
import verefySub from '../../HOOC/verefySub'
import withAuth from '../../HOOC/withauth'
import HeaderAccount from '../../components/header/HeaderAccount'
import MyMovies from '../../components/MyMovies'
import HeaderLogo from '../../components/header/HeaderLogo/HeaderLogo'
import HeaderConecte from '../../components/header/HeaderConecte'
import styles from './index.module.scss'
import { getCatalogues } from '../../graphql/queries/catalogues';
import { useQuery } from '@apollo/client';
const index = () => {

  const { loading, error, data } = useQuery(getCatalogues);

  if (loading) {
    return "loading...";
}

if (error) {
    
    return null;
}

  return (
    <div className={styles.backround}>
      <HeaderConecte/>
      <HeaderAccount/>
                      {
                        data.getCatalogues.map((catalogue) => (
                                <MyMovies key={catalogue.id+Math.random()} title={catalogue.name}></MyMovies>              
                        ))
                    }

    </div>
  )
}

export default withAuth(verefySub(index))