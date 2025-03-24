import React from 'react'
import Hero from './Hero'
import Modal from './modal'
import Divider from './divider'
import Cards from './cards'
import Carousel from './carousel'
import Tabs from './tabs'
import Accordion from './accordion'
import Footer from './footer'
function Home() {
  return (
    <div>
      <div className="main">
        <Hero />
        <Modal />
        <Divider />
        <Cards />
        <Divider />
        <Tabs />
        <Divider />
        <Carousel />
        <Divider />
        <Accordion />
      </div>
      <Footer />
    </div>
  )
}

export default Home
