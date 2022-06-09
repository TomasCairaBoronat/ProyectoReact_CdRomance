import React, {useState} from "react";
function ItemCount({stock,initial}){
    const [count,setCount] = useState(initial)
    const add = () => {
        if(count < stock){

            setCount(count + 1)
            
        }
    }
    const minus = () => {
        if (count > initial){

            setCount(count - 1)

        }
    }
    const onAdd = () => {
        console.log(count)
    }
    return(
        <div className="container">
            <input onClick={minus} type="button" value="-" />
            <span>{count}</span>
            <input onClick={add} type="button" value="+" />
            <input onClick={onAdd} type="button" value="Agregar al carrito" />

        </div>
    )
}
export default ItemCount