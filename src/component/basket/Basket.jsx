import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { addFood } from '../../redux/actions/basketActions';
import './basket.css'

const Basket = () => {
    const [open, setOpen] = React.useState(false)
    const basket = useSelector((state) => state.basket.basket)
    const dispatch = useDispatch()
    console.log(basket)


    return (
        <ul className='site-header-cart' >
            <li className='cart-item'>
                <a href="#"></a>
                <MdShoppingCart />
                <span className='count'>o</span>
            </li>
            <li className={open ? 'cart-item-dropdown hidden' : 'cart-item-dropdown'}>
                <div className='cart_dropdown'>
                    <p className='cart_dropdown__item'>Ваша корзина пуста</p>
                    <button onClick={() => dispatch(addFood({ id: 1, count: 1 }))}>add</button>
                </div>
            </li>
        </ul>
    )
}

export default Basket
