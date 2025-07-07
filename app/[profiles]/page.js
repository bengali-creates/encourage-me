
import React from 'react'
import Payment from '@/components/Payment'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connetdb'
import User from '@/models/User'

const Profiles = async ({ params }) => {
  const { profiles } = await (params)
  await connectDb()
  const checkUser= await User.findOne({ username: profiles })
  if (!checkUser) {
    notFound()
  }else{

  return (
      <Payment profiles={profiles} />







    
  )
}
}
export default Profiles
export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - Encourage Me`,
  }
}