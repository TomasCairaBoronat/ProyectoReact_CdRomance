import React from 'react'
import ItemCount from './ItemCount'
import '../styles/items.css'
import { Link } from 'react-router-dom';
const Item = ({item,console}) => {
    return <div className='card col-md-4 col-lg-3 mx-3 my-2 items'>
        <Link to={`/game/${item.id}`}><img src={item.image} className="card-img-top mx-2" style={{height:300, width:250}}  alt={item.title}/></Link>
    
    <div className="card-body">

      <Link to={`/game/${item.id}`} className="nav-link active"><p className="card-title " ><strong>{item.title}</strong></p></Link>

      <p className="card-text" >{item.description}</p>

        <div className='precio'>
            <p className="card-text euro"><strong><span >{item.price}</span>€</strong></p>
            <ItemCount stock={item.stock} item={item} initial={1}/>
        </div>

    </div>
        
        </div>
};

export default Item;