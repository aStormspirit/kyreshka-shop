import React from 'react'
import image from '../../images/ontime.jpg'
import image2 from '../../images/fresh.png'
import image3 from '../../images/prof.png'
import image4 from '../../images/quality.png'
import './cart.css'

function Cart() {

    function Post(props) {
        return (
            <div className='collumn'>
                <div className='delivery__image'>
                    <img src={props.src}></img>
                </div>
                <div className='delivery__collumn-text'>
                    <div className='delivery-heading'>
                        <span>{props.title}</span>
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
                            <Post src={image3} title={'Всегда Свежее'} />
                            <Post src={image2} title={'Сертификаты качества'} />
                            <Post src={image} title={'Доставка во время'} />
                            <Post src={image4} title={'Профессиональная кухня'} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Cart
