import React from 'react'
import './breadcrumbs.css'
import { useResolvedPath, useHref, Link } from 'react-router-dom'

const Breadcrumbs = () => {
    const b1 = useHref('')

    return (
        <div className="bc">
            <h2 className='bc_link'><Link to="/">Главная</Link></h2>
            {
                !b1.match('/product') && <div className="bc_info"><p className="bc_info_item">/</p><h2 className="bc_info_item">Магазин</h2></div>
            }
            {
                b1.match('/product') && <div className='bc_info'><p className="bc_info_item">/</p><Link to='/store' className="bc_info_item">Магазин</Link><p className="bc_info_item">/</p><h2 className="bc_info_item">Продукты</h2></div>
            }
        </div>
    )
}

export default Breadcrumbs
