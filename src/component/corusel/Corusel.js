import React from 'react'
import { CoruselData } from './CoruselData'
import './corusel.css'

function Corusel() {

    function Image(props) {
        return <div className={`post-corusel__slide-${props.id}`}>
            <div key={props.id} className={`post-corusel__slide-wrapper-${props.id}`}>
                <img src={props.src}></img>
            </div>
            <a href='#'></a>
            <div>
                <a href='#'></a>
            </div>
        </div >
    }

    return (
        <section className='sales-section'>
            <div className='sales-section__wrapper'>
                <div className='sales-section__content'>
                    <div className='sales-section__inner-content'>
                        <div><h2 className='headion-content'>Самые продоваемые товары</h2></div>
                        <div className='corusel'>
                            <div className='corusel__wrapper'>
                                <div className='slick-list'>
                                    <div className='slick-track'>
                                        {CoruselData.map((obj, id) => {
                                            return (
                                                <Image src={obj.image} id={id} />
                                            )
                                        })}
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
