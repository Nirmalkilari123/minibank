import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import LandingHomePage from '@/components/LandingHomePage/LandingHomePage'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Header />
        <main className='flex-grow'>
            <LandingHomePage/>
        </main>
        <Footer />
    </div>
  )
}

export default page