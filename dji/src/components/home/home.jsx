import React from 'react'
import HeroSection from './hero-section'
import HomepageProducts from './homepage-products'
import DroneFeatures from './drone-feature'

const home = () => {
  return (
    <div>
      <HeroSection/>
      <HomepageProducts/>
      <DroneFeatures />
    </div>
  )
}

export default home
