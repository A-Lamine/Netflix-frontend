import React from 'react'
import verefySub from '../../HOOC/verefySub'
import withAuth from '../../HOOC/withauth'

function index() {
  return (
    <div>
      
    </div>
  )
}

export default withAuth(verefySub(index))