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
            },2000);
        });
        bringGames.then((res) =>{
            setGameData(res)
        });

    },[]);
    return(
        <>
        <ItemList items={gameData}/>
        </>
    );
};
export default ItemListContainer;