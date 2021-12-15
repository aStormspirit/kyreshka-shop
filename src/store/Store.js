import React from 'react'
import HeaderTop from "../component/top-navigation/HeaderTop.js";
import HeaderBottom from "../component/bottom-navigation/HeaderBottom.js"
import './store.css'
import Food from './food/Food.js';
import Panel from './panel/Panel.jsx';
import Breadcrumbs from '../component/breadcrumbs/Breadcrumbs'

const Store = () => {
    return (
        <div className='store'>
            <header className="App-header">
                <HeaderTop />
                <HeaderBottom />
            </header>
            <div className='store-header'>
                <div className='store__header-wrapper'>
                    <h2 className="store__header-title">Магазин</h2>
                    <div className="page-descriptions">
                        <span className='first-letter'>Д</span>
                        <div>
                            <p className='store-descriptions'>
                                обро пожаловать в наш разнообразный и эксклюзивный магазин, где мы собрали товары самого высокого качества. Каждый отдельный товар имеет полное описание и характеристики, так что вы наверняка знаете, что заказываете. Без лишних слов, давайте начнем делать покупки и погрузимся в мир Кулинарии
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Breadcrumbs />
            </div>
            <main className='cite_store__main'>
                <Panel />
                <Food />
            </main>
        </div>
    )
}

export default Store
