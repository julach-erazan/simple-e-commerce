import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='productsList'>
        <ProductCard/>
      </div>
    </div>
  )
}

export default Home
