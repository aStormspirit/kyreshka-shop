import React from 'react'
import { MdShoppingCart } from "react-icons/md";

const Basket = () => {
    return (
        <ul className='site-header-cart'>
            <li className='cart-item'>
                <a href="#"></a>
                <MdShoppingCart />
                <span className='count'>o</span>
            </li>
            <li className='cart-item'></li>
        </ul>
    )
}

export default Basket
