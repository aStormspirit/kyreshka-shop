import React from 'react'
import './question.css'
import image from '../../images/avatar.png'
import { ImMinus, ImPlus } from "react-icons/im";

function Question() {

    function Drop() {
        return <div>
            <span className='accordion__header'>
                <a href='#'><span className='accordion__header_icon'><ImPlus /></span><span className='accordion__header_title'>Только свежие продукты</span></a>
            </span>
        </div>
    }

    return (
        <section className='quality'>
            <div className='quality-wrapper'>
                <div className='quality__inner-wrapper'>
                    <div className='quality__collumns'>
                        <div className='quality__column_image'><img src={image}></img></div>
                        <div className='quality__column_content'>
                            <div className='quality__inner-content'>
                                <div className='quality__heading'><h2 className='quality__heading_content'>Высочайшее качество</h2></div>
                                <div>
                                    <Drop />
                                    <Drop />
                                    <Drop />
                                    <Drop />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Question
