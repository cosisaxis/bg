import React from 'react'
import Categories from '../components/Categories'
import Deals from '../components/Deals'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
     <Deals />
     <Navbar />
     <Slider />
     <Categories />
    </div>
  )
}

export default Home