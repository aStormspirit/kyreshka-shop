import React, { useState } from 'react'
import './panel.css'
import { useDispatch, useSelector } from 'react-redux'
import { foodFilter } from '../../redux/actions/foodsActions'

const Panel = () => {
    const dispatch = useDispatch()
    const nomination = useSelector((state) => state.foods.filter)
    const [category, setCategory] = useState(nomination)

    console.log(nomination)

    return (
        <div>
            <div>
                <section>
                    <h4 className='widget_title'>Категории</h4>
                    <ul>
                        <li className='widget_item' onClick={() => dispatch(foodFilter('all'))}><a href="##" className={nomination === 'all' ? 'active' : ''}>Все продукты</a></li>
                        <li className='widget_item' onClick={() => dispatch(foodFilter('bird'))}><a href="##" className={nomination === 'bird' ? 'active' : ''}>Деликатесы из мяса птицы</a></li>
                        <li className='widget_item' onClick={() => dispatch(foodFilter('pork'))}><a href="##" className={nomination === 'pork' ? 'active' : ''}>Деликатесы свиные</a></li>
                        <li className='widget_item' onClick={() => dispatch(foodFilter('ham'))}><a href="##" className={nomination === 'ham' ? 'active' : ''}>Колбасы и Ветчинa</a></li>
                        <li className='widget_item' onClick={() => dispatch(foodFilter('roll'))}><a href="##" className={nomination === 'roll' ? 'active' : ''}>Рулеты из мяса птицы</a></li>
                        <li className='widget_item' onClick={() => dispatch(foodFilter('sosiges'))}><a href="##" className={nomination === 'sosiges' ? 'active' : ''}>Сосиски</a></li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Panel
