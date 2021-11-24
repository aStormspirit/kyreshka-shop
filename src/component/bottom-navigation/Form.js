import React from 'react'
// svg
import { IoMdSearch } from "react-icons/io";

function Form() {
    return (
        <div className='widget-product-search'>
            <form action='#' className='product-search'>
                <input className='search-field' placeholder='Искать продукты...' />
                <IoMdSearch />
                <button className='button-search'>Поиск</button>
            </form>
        </div>
    )
}

export default Form
