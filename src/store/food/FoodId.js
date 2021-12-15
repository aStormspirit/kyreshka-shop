import React from 'react'
import noImg from '../../images/noImg.png'
import './foodid.css'
import { Link } from 'react-router-dom'

const FoodId = (props) => {
    const { prod, id } = props
    return (
        <li className='food_product__item'>
            <div className='food_product_image'><Link to={`product/${id}`}><img src={noImg} alt='food'></img></Link></div>
            <div className='food_product__item'>
                <div >
                    <Link className='product_item_link' to={`product/${id}`}><h2>{prod.name}</h2></Link>
                    <span className='product_item_amount'>{prod.price}</span>
                </div>
            </div>
        </li>
    )
}

export default FoodId
