import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routespages from '../../Routing/Routespages'

const Layout = () => {
  return (
      <>
          <Header />
          <Routespages/>
          <Footer />
      </>
  )
}

export default Layout