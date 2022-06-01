import React from 'react'
import Categories from '../components/Categories'
import Deals from '../components/Deals'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
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
     <Newsletter />
     <Footer />
    </div>
  )
}

export default Home