import React, { useState } from 'react'
import { BsCart3 } from "react-icons/bs";

const Image = (props) => {
    const [selected, setselected] = useState(null)
    const toggle = (i) => {
        setselected(i)
    }

    return (
        <div className={`post-corusel__slide-${props.id}`}>
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
    )
}

export default Image
