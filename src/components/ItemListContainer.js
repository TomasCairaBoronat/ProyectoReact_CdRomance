import '../styles/ItemListContainer.css'
import ItemCount from './ItemCount.js'
const ItemListContainer = (props) => {
    return(
        <>
        <h3 className='tba'>{props.greeting}</h3>
        <ItemCount stock={10} initial={1}/>
        </>
    )
}
export default ItemListContainer