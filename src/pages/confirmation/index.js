import React, { useEffect } from 'react'
import Router from "next/router"
import withAuth from '../../HOOC/withAuth'


function Index() {

    useEffect(()=>{
        alert('Votre paiment est accepté recontectez vous pour en profiter')
    localStorage.removeItem("token")
    localStorage.removeItem("email")

    Router.push("/login")


    })
    
  return (
    <div>
            
    </div>
  )
}

export default withAuth(Index)