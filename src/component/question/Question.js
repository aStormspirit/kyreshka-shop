import { React, useState } from 'react'
import './question.css'
import image from '../../images/avatar.png'
import { ImMinus, ImPlus } from "react-icons/im";
import { QuestionData } from './QuestionData';

function Question() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null)
        } else {
            setSelected(i)
        }
    }

    function Drop(props) {

        return <div>
            <div className='accordion' key={props.id}>
                <span className='accordion__header' onClick={() => toggle(props.id)}>
                    <a href='##' className='accordion__link'><span className='accordion__header_icon isn_active'><ImMinus /></span><span className='accordion__header_icon'><ImPlus /></span><span className='accordion__header_title'>{props.title}</span></a>
                </span>
            </div>
            <div className={selected === props.id ? 'accordion__content show' : 'accordion__content'}>
                <div className='accordion__content-inner'>
                    <p>{props.descriptions}</p>
                    <p>{props.subtitle}</p>
                </div>
            </div>
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
                                    {QuestionData.map((el, i) => {
                                        return <Drop title={el.title} descriptions={el.descriptions} subtitle={el.subtitle} id={i} />
                                    })
                                    }
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
