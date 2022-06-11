import React from 'react'
import Item from './Item.js'
import '../styles/itemList.css'
const ItemList = ({items}) => {
  return (
    <div className='row list' >
        {
            items.map((item)=>(
                <Item key={item.id}  item={item}/>
                ))
        }
    </div>
  )
};

export default ItemList;