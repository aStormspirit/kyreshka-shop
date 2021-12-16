import React, { useState } from 'react'
import './tabs.css'

const Tabs = () => {
    const [state, setState] = useState(1)
    return (
        <div className='Tabs'>
            <ul className='Tabs_header'>
                <li className={state === 1 ? 'Tabs_header__item active' : 'Tabs_header__item'} onClick={() => setState(1)}><p>Описание</p></li>
                <li className={state === 2 ? 'Tabs_header__item active' : 'Tabs_header__item'} onClick={() => setState(2)}><p>Дополнительная информация</p></li>
                <li className={state === 3 ? 'Tabs_header__item active' : 'Tabs_header__item'} onClick={() => setState(3)}><p>Комментарии</p></li>
            </ul>
            <div className="Tabs_content">
                <div className={state === 1 ? 'Tabs_content-wrapper' : 'Tabs_content-wrapper hide'}>
                    <p>Наиболее дешёвое и универсальное мясо — курятина.
                        Мясо курицы можно использовать почти в любом блюде.
                        Оно оптимально для людей, которым необходимо употреблять большое количество белка, например спортсменам, ведь в 100 граммах продукта содержится 30 граммов белка.
                        На это же количество куриного мяса приходится 239 калорий.
                        Масса средней куриной тушки — около 2,5 килограмма. В холодильнике куриное мясо может храниться до двух дней, а в морозильной камере —  до года. </p>
                    <p>Витамины и минералы — основные полезные вещества, содержащиеся в мясе курицы и индейки.
                        Значимыми для организма являются витамины группы B.
                        Они оказывают положительное воздействие на обмен веществ и функционирование всех систем организма.
                        Например, витамин В1 способствует улучшению работы мозга и когнитивной функции и оказывает положительное воздействие на сердечно-сосудистую систему.
                        А витамин B2 помогает сохранить хорошее состояние кожи и ногтей. </p>
                    <p>Благодаря низкой калорийности и полезным свойствам, многие диеты включают в себя мясо курицы или индейки.
                        В отличие от свинины, особенно жареной, мясо птицы легко усваивается.
                        Люди, желающие похудеть, часто употребляют куриную грудку, поскольку она содержит белок, а содержание жира не слишком высокое.
                        Из индейки и курицы можно приготовить множество вкусных и полезных блюд. </p>
                    <p>
                        Витамины на 100гр продукта:
                    </p>
                    <ul>
                        <li>Витамин A - 23,5мкг</li>
                        <li>Витамин D - 0,37мкг</li>
                        <li>Витамин E - 0,29мкг</li>
                        <li>Витамин B1 - 0,14мкг</li>
                    </ul>
                </div>
                <div className={state === 2 ? 'Tabs_content-wrapper__additional' : "Tabs_content-wrapper__additional hide"}>
                    <table className='additional_table'>
                        <tbody>
                            <tr>
                                <th className='table_item'>Брэнд</th>
                                <td className='table_value'>Курёшка</td>
                            </tr>
                            <tr>
                                <th className='table_item'>Пищевая ценность</th>
                                <td className='table_value'>Диетическое мясо</td>
                            </tr>
                            <tr>
                                <th className='table_item'>Производство</th>
                                <td className='table_value'>ПМК</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={state === 3 ? 'Tabs_content-wrapper__comments' : 'Tabs_content-wrapper__comments hide'}>
                    <h2 className='comments_title'>Отзывы</h2>
                    <p className='comments_subtitle'>Отзывов еще нет.</p>
                    <div className='comments_respond'>
                        <div className='comments_respond-wrapper'>
                            <span>Оставьте первый отзыв</span>
                            <p>Вы должны быть зарегестрированны, прежде чем оставить отзыв</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs
