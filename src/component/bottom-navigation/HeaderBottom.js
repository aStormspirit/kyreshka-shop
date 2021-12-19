import { React } from 'react'
import { Link } from 'react-router-dom'
// jpg
import logo from '../../images/logo.png'
// css
import './bottom.css'
// icons
import { BsPerson } from "react-icons/bs";
// components
import Form from "./Form.js"
import Navbar from './Navbar.js';
import Basket from '../basket/Basket'

function HeaderBottom() {

    return (
        <div className='bottom-navigation'>
            <div className='bottom-navigation-wrapper'>
                <div className='default-navigation'>
                    <div className='site-branding'>
                        <img src={logo} alt='logo'></img>
                        <div className='site-text'>
                            <p className='site-title'>
                                <Link to='/'>Курёшка</Link>
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
                    <Basket />
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom

