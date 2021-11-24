import React from 'react'
import { ProductData } from './ProductData'
import './product.css'


function Product() {

    function Animal(props) {
        return <li className='product'>
            <a href='#'>
                <div className='product__inner'>
                    <img src={props.src}></img>
                </div>
            </a>
            <a href='#' className='product__title'><h2>{props.name}</h2></a>
        </li>
    }

    console.log(ProductData)

    return (
        <section className='section'>
            <div className='section__wrapper'>
                <div className='section__inner-wraper'>
                    <div className='section__background-holder'>
                        <div className='section__background'></div>
                    </div>
                    <div className='section__content'>
                        <div className='section__inner-content'>
                            <div className='collumn-4'>
                                <ul className='products'>
                                    <Animal src={ProductData[0].src} name={ProductData[0].name} />
                                    <Animal src={ProductData[1].src} name={ProductData[1].name} />
                                    <Animal src={ProductData[2].src} name={ProductData[2].name} />
                                    <Animal src={ProductData[3].src} name={ProductData[3].name} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
