import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
//data
import { Foods } from '../food/FoodData'
import './product.css'
import NoImg from '../../images/noImg.png'
//component
import HeaderTop from '../../component/top-navigation/HeaderTop';
import HeaderBottom from '../../component/bottom-navigation/HeaderBottom.js'
import Breadcrumbs from '../../component/breadcrumbs/Breadcrumbs'
import Tabs from '../tabs/Tabs'
import Slice from '../slice/Slice'
import Footer from '../../component/footer/Footer'




const Product = () => {
    const { id: ProdId } = useParams()
    const product = Foods.filter(food => food.id === parseInt(ProdId))
    const [data, setData] = useState(product)
    const related = Foods.filter(food => food.category === product[0].category).slice(0, 5)
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
                                Мясо птицы имеет в своем составе высокое содержание животных белков и биологическую ценность.
                                Домашняя птица содержит больше белка и меньше тканей, в частности коллагена, чем свинина или говядина.
                                В связи с низким содержанием жира и снижением энергетической ценности мясо птицы считается диетическим.
                                Кроме того, оно также является хорошим источником минералов, калия, кальция, фосфора, натрия и железа.
                            </div>
                            <form>
                                <div>
                                    <input type="number" min={1} className='product_form__input' />
                                    <button className='product_form__button'>Добавить в корзину</button>
                                </div>
                            </form>
                            <div className='product_category'>
                                <span className='product_category-wrapper'>
                                    Категория: <Link to='/store'>{product[0].category}</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Tabs />
                </div>
                <section className='slice-container'>
                    <h2 className='slice-title'> Похожие продукты</h2>
                    <Slice related={related} />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Product
