import React,{useState,useEffect} from 'react'
import '../styles/ItemListContainer.css'
import gamesData from '../json/gamesData.json'
import ItemList from './ItemList'
const ItemListContainer = () => {
    const [gameData,setGameData] = useState([]);
    useEffect( ()=>{
        const bringGames = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(gamesData)
                rej("There's been an error loading the data")
            },2000);
            
        });
        bringGames.then((res) =>{
            setGameData(res)
        })
        .catch(rej =>{
            console.error(rej)
        });

    },[]);
    return(
        <div> 

        <ItemList items={gameData}/>
        </div>
    );
};
export default ItemListContainer;