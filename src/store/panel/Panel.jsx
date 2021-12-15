import React from 'react'
import './panel.css'

const Panel = () => {
    return (
        <div>
            <div>
                <section>
                    <h4 className='widget_title'>Категории</h4>
                    <ul>
                        <li className='widget_item'><a href="##">Все продукты</a></li>
                        <li className='widget_item'><a href="##">Деликатесы из мяса птицы</a></li>
                        <li className='widget_item'><a href="##">Деликатесы свиные</a></li>
                        <li className='widget_item'><a href="##">Колбасы и Ветчинa</a></li>
                        <li className='widget_item'><a href="##">Рулеты из мяса птицы</a></li>
                        <li className='widget_item'><a href="##">Сосиски</a></li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Panel
