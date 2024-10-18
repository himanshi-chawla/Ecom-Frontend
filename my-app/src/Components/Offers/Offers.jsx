import React from 'react'
import './Offers.css'
import excucive_image from '../Assests/exclusive_image.png'

function Offers() {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>CHECK NOW</button>

        </div>
      <div className="offers-right">
        <img src={excucive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
