import React from 'react'
import image from '../../images/ontime.jpg'
import './cart.css'

function Cart() {

    function Post() {
        return (
            <div className='collumn'>
                <div className='delivery__image'>
                    <img src={image}></img>
                </div>
                <div className='delivery__collumn-text'>
                    <div className='delivery-heading'>
                        <span>Всегда свежее</span>
                    </div>
                    <p className='delivery-subtitle'>Все наши продукты имеют высокое качество и всегда проверяются перед отправкой</p>
                    <div className='delivery-button'>
                        <div className='delivery__button-wrapper'><a href='#'>В магазин</a></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className='section-delivery'>
            <div className='delivery-wrapper'>
                <div className='delivery__inner-wrapper'>
                    <div></div>
                    <div className='delivery__content'>
                        <div className='delivery__content-wrapper'><h2 className='delivery-content'>Резка и Доставка</h2></div>
                        <div className='delivery-collumn'>
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Cart
