
import React from 'react'
import Payment from '@/components/Payment'

const Profiles = async ({ params }) => {
  const { profiles } = await (params)


  return (

    
      <Payment profiles={profiles} />







    
  )
}

export default Profiles