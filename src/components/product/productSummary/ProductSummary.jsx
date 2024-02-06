import React from 'react'
import './productSummary.css'
import Infobox from '../../infobox/Infobox'
import { AiFillDollarCircle } from 'react-icons/ai'
import { BsCart4, BsCartX } from 'react-icons/bs'
import { BiCategory } from 'react-icons/bi'

//create icons
const earningIcon = <AiFillDollarCircle size={40} color='#fff' />
const productIcon = <BsCart4 size={40} color='#fff' />
const outOfStockIcon = <BsCartX size={40} color='#fff' />
const catagoryIcon = <BiCategory size={40} color='#fff' />


const ProductSummary = ({products}) => {
  return (
    <div className='product-summary'>
      <h3>Inventory Stats</h3>
      <div className="info-summary">

        <Infobox
          icon={productIcon}
          title={"Total Products"}
          count={products.length}
          bgColor="card1"
        />
        <Infobox
          icon={earningIcon}
          title={"Total Store Value"}
          count={"0"}
          bgColor="card2"
        />
        <Infobox
          icon={outOfStockIcon}
          title={"Out of Stock"}
          count={"0"}
          bgColor="card3"
        />
        <Infobox
          icon={catagoryIcon}
          title={"All Catagories"}
          count={"0"}
          bgColor="card4"
        />
      </div>
    </div>
  )
}

export default ProductSummary