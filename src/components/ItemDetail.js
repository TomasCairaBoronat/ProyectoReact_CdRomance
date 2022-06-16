import React from 'react'
import ItemCount from './ItemCount'
import '../styles/items.css'
const ItemDetail = ({item}) => {
    return <div className='container mb-5' >
    <div className='row'>
        <div className='col-lg-6 colPic1'>
            <img src={item.image}  style={{height:400, width:400}}  alt={item.title}/>
        </div>
        <div className='col-lg-6 colPrice'>
            <p ><strong>{item.title}</strong></p>

            <p>{item.fullDescription}</p>

            <div className='precio'>
                <p className="euro"><strong><span >{item.price}</span>€</strong></p>
                <ItemCount stock={item.stock} item={item} initial={1}/>
            </div>
        </div>
    </div>

</div>
}

export default ItemDetail