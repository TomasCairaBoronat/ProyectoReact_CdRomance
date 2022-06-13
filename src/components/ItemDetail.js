import React from 'react'
import ItemCount from './ItemCount'
import '../styles/items.css'
const ItemDetail = ({item}) => {
    return <div className='container mb-3' >
    <div className='row'>
        <div className='col-md-6'>
            <img src={item.image} className=" mx-5" style={{height:600, width:500}}  alt={item.title}/>
        </div>
        <div className='col-md-6 colPrice'>
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