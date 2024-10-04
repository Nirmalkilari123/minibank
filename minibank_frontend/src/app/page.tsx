import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Homes from '@/components/Homes/Homes'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
        <main>
            <Homes/>
        </main>
        <Footer />
    </div>
  )
}

export default page