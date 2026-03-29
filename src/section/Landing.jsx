import React from 'react'
import Header from '../components/header/header'
import Safe from '../components/safe/safe'
import Features from '../components/features/features'
import Footer from '../components/footer/footer'
import './Landing.css'

const Landing = () => {
  return (
    <div>
      <Header />
      <main className="landing-main">
        <section className="landing-hero">
          <Safe />
          <Features />
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default Landing
