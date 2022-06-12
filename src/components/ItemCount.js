import React, {useState} from "react";
function ItemCount({stock,initial,item}){
    const [count,setCount] = useState(initial)
    const add = () => {
        if(count < stock){

            setCount(count + 1)
            
        };
    };
    const minus = () => {
        if (count > initial){

            setCount(count - 1)

        };
    };
    const onAdd = () => {
        console.log("Added "+ item.title + " X " + count)
    };
    return(
        <div className="container">
            <div className="mx-4 mb-3">

            <input className="mx-1" onClick={minus} type="button" value="-" />
            <span>{count}</span>
            <input className="mx-1"  onClick={add} type="button" value="+" />
            </div>
            <input className='mb-3 mt-2 mx-2' onClick={onAdd} type="button" value="Add to cart" />

        </div>
    );
};
export default ItemCount;