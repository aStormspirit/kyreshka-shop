import { React } from 'react'
import { CoruselData } from './CoruselData'
import './corusel.css'
// slick-slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "./Image"
function Corusel() {

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
