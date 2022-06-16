import React,{useState,useEffect} from 'react'
import gamesData from '../json/gamesData.json'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'
import '../styles/items.css'
const ItemDetailContainer = () => {
    const [gameData,setGameData] = useState([]);
    const {gameId} = useParams();
    useEffect( ()=>{
        const bringGame = new Promise ((res,rej)=>{
            setTimeout(()=>{ 
                const gameFound = gamesData.find(game =>{
                return game.id === parseInt(gameId)
            })
                res(gameFound)
                rej("There's been an error loading the data")
            },2000);
            
        });
        bringGame.then((res) =>{
            setGameData(res)
        })
        .catch(rej =>{
            console.error(rej)
        });

    },[gameId]);
    return(
        <div className='itemDeatil'>
        <ItemDetail item={gameData}/>
        </div>
    );
}

export default ItemDetailContainer