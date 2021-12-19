import React from 'react'
import HeaderTop from "./top-navigation/HeaderTop.js";
import HeaderBottom from "./bottom-navigation/HeaderBottom.js";
import './about.css'
import Map from './Map/Map'
import Footer from './footer/Footer';

const About = () => {
    return (
        <div>
            <header className="App-header">
                <HeaderTop />
                <HeaderBottom />
            </header>
            <main>
                <article>
                    <div>
                        <div className="about-header">
                            <div className="about-header-wrapper">
                                <div>
                                    <div className='about_title'><h2>Связаться с нами</h2></div>
                                    <div className='about_info'>
                                        <div className='about_info__item'><h3>Петроградский р-он,<br /> Санкт-Петербург</h3><p>Улица, д.2<br />+7(228)148-88-22<br /><a className='about_link' href='##'>email@mail.ru</a></p></div>
                                        <div className='about_info__item'><h3>Калининский р-он,<br /> Санкт-Петербург</h3><p>Улица, д.2<br />+7(228)148-88-22<br /><a className='about_link' href='##'>email@mail.ru</a></p></div>
                                        <div className='about_info__item'><h3>Выборгский р-он,<br /> Санкт-Петербург</h3><p>Улица, д.2<br />+7(228)148-88-22<br /><a className='about_link' href='##'>email@mail.ru</a></p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='about_content'>
                            <div className='about_content-wrapper'>
                                <div className='about_content__title'>
                                    <h3>Оставьте нам сообщение</h3>
                                </div>
                                <p className="about_content__subtitle">Ваш email адрес не будет опубликован. Заполните поля помеченные *</p>
                                <div className='about_content__form'>
                                    <form action="">
                                        <p className='about_content__field'><input type="text" placeholder='Имя*' /></p>
                                        <p className='about_content__field'><input type="text" placeholder='Email*' /></p>
                                        <p className='about_content__field'><textarea placeholder='Ваше сообщение*' name="message" id="m" rows="5"></textarea></p>
                                        <button className='about_content__button'>Отправить</button>
                                    </form>
                                </div>
                            </div>
                            <div className='about_content__map'>
                                <Map />
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}

export default About
