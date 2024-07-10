import React from 'react'
import './Checkout.css'
import checkout from './images/amazon_banner3.jpg'
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
          <img className='checkout__ad' src={checkout} alt='' />
          <div>
           <h2 className='checkout__title'>
                <p>Your Shopping Basket</p>
           </h2> 
        </div> 
        </div>
        <div className='checkout__right'>
         <Subtotal />
        </div>
    </div>
  );
}

export default Checkout
