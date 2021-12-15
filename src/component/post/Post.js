import React from 'react'
import { PostData } from './PostData'
import './post.css'

function Post() {

    function Cart(props) {
        return <article className='post__reciepts-post'>
            <div key={props.id}>
                <div className='post__img'>
                    <img src={props.img} alt="img" />
                </div>
                <div className='reciepts-post__content-wrapper'>
                    <div className='reciepts-post__posts'>
                        <span className='post-time'>20 Мая 2021</span>
                        <span className='post-category'><a href='##'>{props.category}</a></span>
                    </div>
                    <div>
                        <h4 className='post-title'><a href='##'>{props.title}</a></h4>
                    </div>
                </div>
            </div>
        </article>
    }

    return (
        <div className='post'>
            <div className='post__wrapper'>
                <div className='post__inner-wrapper'>
                    <div className='post__content'>
                        <div className='post__title'>
                            <h2>Новости & события</h2>
                        </div>
                        <div className='post__posts'>
                            {PostData.map((el, i) => {
                                return <Cart category={el.category} title={el.title} img={el.img} id={i} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
