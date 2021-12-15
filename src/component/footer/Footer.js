import React from 'react'
import logo from '../../images/logo.png'
import './footer.css'
import { IoLogoWhatsapp, IoPaperPlane, IoMailSharp } from "react-icons/io5";

function Footer() {
    return (
        <footer>
            <div className='footer__widget'>
                <div className="footer__widget-wrapper">
                    <div className="widget-area">
                        <section className='widget'>
                            <div className='footer__site-branding'>
                                <a href="##">
                                    <img className='footer__logo' src={logo} alt="logo" />
                                </a>
                            </div>
                            <div className='site-title-wrapper'>
                                <p className='footer__site-title'>
                                    <a href='##' alt='title'>
                                        Курёшка
                                    </a>
                                </p>
                                <p className='site-descriptions'>
                                    Свежее мясо&кура
                                </p>
                            </div>
                        </section>
                        <section>
                            <h3 className='widget__title'>Подписаться на новости</h3>
                            <form action="" className='footer__form'>
                                <p className='form__p'><input id='form__input1' type="text" placeholder='Введите ваш email' /></p>
                                <p><input id='form__input2' type='submit' value='подписаться' /></p>
                            </form>
                        </section>
                    </div>
                    <div className="widget-area">
                        <section>
                            <h3 className='footer_widget__title'>Мясной Магазин</h3>
                            <div>
                                <ul className='menu'>
                                    <li className='footer__menu-item'><a href='##'>Курица</a></li>
                                    <li className='footer__menu-item'><a href='##'>Колбаса</a></li>
                                    <li className='footer__menu-item'><a href='##'>Сосиски</a></li>
                                    <li className='footer__menu-item'><a href='##'>Мясо</a></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="widget-area">
                        <section>
                            <h3 className='footer_widget__title'>О нас</h3>
                            <div>
                                <ul className='menu'>
                                    <li className='footer__menu-item'><a href='##'>Блог</a></li>
                                    <li className='footer__menu-item'><a href='##'>Связаться с нами</a></li>
                                    <li className='footer__menu-item'><a href='##'>О нас</a></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="widget-area">
                        <section className='footer__widget_contacts'>
                            <div>
                                <h3 className='footer_widget__title'>Соц. сети</h3>
                                <div>
                                    <ul className='footer_icon-contacts'>
                                        <li className='footer_icon-item'><IoLogoWhatsapp /></li>
                                        <li className='footer_icon-item'><IoPaperPlane /></li>
                                        <li className='footer_icon-item'><IoMailSharp /></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h3 className='footer_widget__title'>Информация</h3>
                                <div>
                                    <ul className='footer__widget-menu-2'>
                                        <li>+7(928)858-28-88</li>
                                        <li>Санкт-Петербург, 8-й верхний</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className='footer__info-container'>
                <div className='footer__info-wrapper'>
                    <div className='footer__site-info'>
                        Курёшка © 2021 Все права защищенны</div>
                    <div></div>
                    <div>
                        <ul className='footer_menu'>
                            <li className='footer_menu__item'><a href="##">политика конфиденциальности</a></li>
                            <li className='footer_menu__item'><a href="##">Правила и условия</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
