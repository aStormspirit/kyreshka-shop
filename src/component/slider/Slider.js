import { React, useState } from 'react'
// svg
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
// css
import './slider.css'
import { SliderData } from './SliderData';

import { Link } from 'react-router-dom'

function Slider() {

    const [current, setCurrent] = useState(0)

    const length = SliderData.length

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    function Image(props) {
        console.log(props)
        return (
            <div>
                <div className='slider-info'>
                    <h3 className='slider-info-title'>{props.title}</h3>
                    <h2 className='slider-info-text'>{props.name}</h2>
                    <h4 className='slider-info-subtitle'>{props.info}</h4>
                    <Link to='/store' className='slider-button-brown'>Магазин</Link>
                    <button className='slider-button-grey'>О нас</button>
                </div>
                <img className='slider-img' src={props.src}></img>
            </div>
        )
    }


    return (
        <section className='main-slider'>
            <div className='main-slider-wrapper'>
                <button className='slider-button left' onClick={prevSlide}><BsChevronLeft /></button>
                {SliderData.map((obj, id) => {
                    return (
                        <div className={id === current ? 'slide active' : 'slide'} key={id}>
                            {id === current && (<Image src={obj.image} title={obj.title} name={obj.name} info={obj.info} />)}
                        </div>
                    )
                })}
                <button className='slider-button right' onClick={nextSlide}><BsChevronRight /></button>
            </div>
        </section>
    )
}

export default Slider
