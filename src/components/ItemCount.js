import React, {useState} from "react";
function ItemCount({stock,initial}){
    const [count,setCount] = useState(initial)
    function add (){
        if(count < stock){

            setCount(count + 1)
            
        }
    }
    function minus(){
        if (count > initial){

            setCount(count - 1)

        }
    }
    return(
        <div className="container">
            <input onClick={minus} type="button" value="-" />
            <span>{count}</span>
            <input onClick={add} type="button" value="+" />
        </div>
    )
}
export default ItemCount