import React from 'react'
import './breadcrumbs.css'
import { useResolvedPath, useHref, Link } from 'react-router-dom'

const Breadcrumbs = () => {
    const b1 = useHref('')

    console.log(b1)
    return (
        <div className="bc">
            <h2 className='bc_link'><Link to="/">Главная</Link></h2>
        </div>
    )
}

export default Breadcrumbs
