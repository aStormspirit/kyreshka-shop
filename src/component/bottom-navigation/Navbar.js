import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from 'react'
import { Link } from 'react-router-dom'


function NavbarItem(props) {
    const [open, setOpen] = useState(false)

    function closed(event) {
        setOpen(!open)
    }

    return (
        <li className='prim-menu-item' onPointerEnter={() => { setOpen(!open) }} onPointerLeave={closed}>
            <a href='#' > {props.name}</a>
            {props.icon}
            {open && props.children}
        </li >
    )
}


function Navbar() {

    return (
        <nav className='site-navigation'>
            <div className='main-navigation-wrapper'>
                <ul className='primary-menu'>
                    <li className='prim-menu-item'>
                        <Link to='/store'>Магазин</Link>
                    </li>
                    <NavbarItem name='Колбаса' icon={<AiFillCaretDown />}>
                        <ul className='dropdown'>
                            <li>Сосиски</li>
                            <li>Вареная</li>
                        </ul>
                    </NavbarItem>
                    <NavbarItem name='Курица' icon={<AiFillCaretDown />}>
                        <ul className='dropdown'>
                            <li>Охлажденная</li>
                            <li>Копченная</li>
                        </ul>
                    </NavbarItem>
                    <NavbarItem name='О нас' icon={<AiFillCaretDown />}>
                        <ul className='dropdown'>
                            <li>Блог</li>
                            <li>Связаться с нами</li>
                        </ul>
                    </NavbarItem>
                </ul>

            </div>

        </nav>
    )
}

export default Navbar
