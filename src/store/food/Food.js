import React, { useState, useEffect } from 'react'
import './food.css'
import FoodId from './FoodId';
import Pagination from '../pagination/Pagination'
import { useSelector } from 'react-redux'
import { TiThMenu, TiThLarge } from "react-icons/ti";

const Food = () => {
    const Foods = useSelector((state) => state.foods.foods)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12)
    const slice = Foods.slice(0, 12)

    useEffect(() => {
        setCurrentPage(1)
    }, [])


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Foods.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='food'>
            <div className='food_wrapper'>
                <nav><a href="##" className='food_nav__list'><TiThLarge /></a> <a href="##" className='food_nav__list'><TiThMenu /></a></nav>
                <p className='food_result__count'>
                    Показано {indexOfFirstPost + 1}–{indexOfLastPost > Foods.length ? Foods.length : indexOfLastPost} из {Foods.length} результатов</p>
                <select className="order">
                    <option value="default">Стандартная сортировка</option>
                    <option value="minmax">По цене: от меньшего к большему</option>
                    <option value="maxmin">По цене: от большего к меньшему</option>
                    <option value="popularity">По популярности</option>
                </select>
            </div>
            <div></div>
            <ul className='food_products'>
                {currentPosts.map((prod, id) => {
                    return (
                        <FoodId prod={prod} id={id} />
                    )
                })}
            </ul>
            <nav className='food_page'>
                <Pagination
                    postsPerPage={postsPerPage}
                    cP={currentPage}
                    totalPosts={Foods.length}
                    paginate={paginate} />
            </nav>
        </div>
    )
}

export default Food
