import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Foods } from '../food/FoodData'
import HeaderTop from '../../component/top-navigation/HeaderTop';
import HeaderBottom from '../../component/bottom-navigation/HeaderBottom.js'
import Breadcrumbs from '../../component/breadcrumbs/Breadcrumbs'
import NoImg from '../../images/noImg.png'
import './product.css'

const Product = () => {
    const { id: ProdId } = useParams()
    const product = Foods.filter(food => food.id === parseInt(ProdId))
    const [data, setData] = useState(product)

    console.log(product[0])
    return (
        <div>
            <header className="App-header">
                <HeaderTop />
                <HeaderBottom />
            </header>
            <div className='bc'>
                <Breadcrumbs />
            </div>
            <main className='product'>
                <div className='product-wrapper'>
                    <div className='product_container'>
                        <div className='product_image-wrapper'>
                            <div className='product_image'>
                                <img src={NoImg} alt="" />
                            </div>
                        </div>
                        <div className='product_title'>
                            <h1 className='product_title__name'>{product[0].name}</h1>
                            <p className='product_title__price'>{product[0].price}</p>
                            <div className='product_title__descriptions'>
                                Raspberries are sweet berries which a specifically beloved by children as they are quick and handy to eat. The homeland of raspberries is considered to be Central Europe. Currently, their shrubs are grown in Russia, USA, Serbia and Montenegro.
                            </div>
                            <form>
                                <div>
                                    <input type="number" className='product_form__input' />
                                    <button className='product_form__button'>Добавить в корзину</button>
                                </div>
                            </form>
                            <div>
                                <span>
                                    {product[0].category}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Описание</li>
                        <li>Дополнительная информация</li>
                        <li>Комментарии</li>
                    </ul>
                    <div></div>
                </div>
            </main>
        </div>
    )
}

export default Product
