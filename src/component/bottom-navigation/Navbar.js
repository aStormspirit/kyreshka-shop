import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from 'react'


function NavbarItem(props) {
    const [open, setOpen] = useState(false)

    return (
        <li className='prim-menu-item'>
            <a href='#' onPointerEnter={() => { setOpen(!open) }} onPointerLeave={() => { setOpen(!open) }}>{props.name}</a>
            {props.icon}
            {open && props.children}
        </li>
    )
}


function Navbar() {

    return (
        <nav className='site-navigation'>
            <div className='main-navigation-wrapper'>
                <ul className='primary-menu'>
                    <li className='prim-menu-item'>
                        <a href='#'>Магазин</a>
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
