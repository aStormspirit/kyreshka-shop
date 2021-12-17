import React from 'react'
import './pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, cP }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className={number === cP ? 'page-item current' : 'page-item'}>
                        <a onClick={() => paginate(number)} href='##' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
