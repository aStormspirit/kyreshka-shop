import React from 'react'
import Image from '../../component/corusel/Image'
import './slice.css'
import NoImg from '../../images/noImg.png'

const Slice = (props) => {
    const { related } = props
    return (
        <div className='slice'>
            {
                related.map((obj) => {
                    return <Image src={obj.image ? obj.Image : NoImg} id={obj.id} name={obj.name} price={obj.price} />
                })
            }
        </div>
    )
}

export default Slice
