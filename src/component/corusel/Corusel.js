import { React, useState } from 'react'
import { CoruselData } from './CoruselData'
import './corusel.css'
// slick-slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// icon
import { BsCart3 } from "react-icons/bs";

function Corusel() {

    const [selected, setselected] = useState(null)

    const toggle = (i) => {
        setselected(i)
    }

    function Image(props) {
        return <div className={`post-corusel__slide-${props.id}`}>
            <div key={props.id} className={`post-corusel__slide-wrapper-${props.id}`} onPointerEnter={() => toggle(props.id)} onPointerLeave={() => setselected(null)}>
                <img src={props.src} alt='corusel-image'></img>
                <div className='slider-icon'>
                    <a href='#' >
                        {selected === props.id && <div className='slider-icon__wrapper'><BsCart3 className='slider-icon__svg' /></div>}
                    </a>
                </div>
            </div>
            <a href='#' className='slide-link'><h2 className='slider-name'>{props.name}</h2></a>
            <h3 className='slider-price'>{props.price}</h3>
        </div >
    }

    return (
        <section className='sales-section'>
            <div className='sales-section__wrapper'>
                <div className='sales-section__content'>
                    <div className='sales-section__inner-content'>
                        <div className='headion'><h2 className='headion-content'>Самые продаваемые товары</h2></div>
                        <div className='corusel'>
                            <div className='corusel__wrapper'>
                                <div className='slick-list'>
                                    <div className='slick-track'>
                                        <Slider
                                            dots={true}
                                            slidesToShow={5}
                                            slidesToScroll={1}
                                        >{CoruselData.map((obj, id) => {
                                            return (
                                                <Image src={obj.image} id={id} name={obj.name} price={obj.price} />
                                            )
                                        })}</Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Corusel
