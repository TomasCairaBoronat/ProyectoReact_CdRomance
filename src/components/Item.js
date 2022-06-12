import React from 'react'
import ItemCount from './ItemCount'
import '../styles/items.css'
const Item = ({item}) => {
    return <div className='card col-md-4 col-lg-3 mx-3 my-2 items'>
        <img src={item.image} className="card-img-top mx-2" style={{height:300, width:250}}  alt={item.title}/>
    
    <div className="card-body">

      <p className="card-title " ><strong>{item.title}</strong></p>

      <p className="card-text" >{item.description}</p>

        <div className='precio'>
            <p className="card-text euro"><strong><span >{item.price}</span>€</strong></p>
            <ItemCount stock={item.stock} item={item} initial={1}/>
        </div>

    </div>
        
        </div>
};

export default Item;