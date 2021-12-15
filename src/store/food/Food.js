import React, { useState } from 'react'
import { Foods } from './FoodData'
import './food.css'
import { BsGrid3X3Gap, BsGrid3X2Gap } from "react-icons/bs";
import FoodId from './FoodId';
import Pagination from '../pagination/Pagination'

const Food = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    const slice = Foods.slice(0, 12)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Foods.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='food'>
            <div className='food_wrapper'>
                <nav><a href="##" className='food_nav__list'><BsGrid3X3Gap /></a> <a href="##" className='food_nav__list'><BsGrid3X2Gap /></a></nav>
                <p className='food_result__count'>
                    Showing 1–16 of 20 results</p>
                <form action=""></form>
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
