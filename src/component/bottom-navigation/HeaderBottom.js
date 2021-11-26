import { React } from 'react'
// jpg
import logo from '../../images/logo.png'
// css
import './bottom.css'
// icons
import { MdShoppingCart } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
// components
import Form from "./Form.js"
import Navbar from './Navbar.js';

function HeaderBottom() {

    return (
        <div className='bottom-navigation'>
            <div className='bottom-navigation-wrapper'>
                <div className='default-navigation'>
                    <div className='site-branding'>
                        <img src={logo} alt='logo'></img>
                        <div className='site-text'>
                            <p className='site-title'>
                                <a href='#'>Курёшка</a>
                            </p>
                            <p className='site-description'>Свежее мясо&кура</p>
                        </div>
                    </div>
                    <Navbar />
                </div>
                <div className='header-actions'>
                    <div className='site-header-search'>
                        <Form />
                    </div>
                    <div className='site-header-account'>
                        <a href='#'> <BsPerson /></a>
                    </div>
                    <ul className='site-header-cart'>
                        <li className='cart-item'>
                            <a href="#"></a>
                            <MdShoppingCart />
                            <span className='count'>o</span>
                        </li>
                        <li className='cart-item'></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom

