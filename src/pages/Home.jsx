import React from 'react'
import Categories from '../components/Categories'
import Deals from '../components/Deals'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
     <Deals />
     <Navbar />
     <Slider />
     <Categories />
     <Products />
    </div>
  )
}

export default Home