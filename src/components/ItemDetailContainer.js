import React,{useState,useEffect} from 'react'
import gamesData from '../json/gamesData.json'
import ItemDetail from './ItemDetail';
const ItemDetailContainer = () => {
    const [gameData,setGameData] = useState([]);
    useEffect( ()=>{
        const bringGame = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(gamesData[0])
                rej("There's been an error loading the data")
            },2000);
            
        });
        bringGame.then((res) =>{
            setGameData(res)
        })
        .catch(rej =>{
            console.error(rej)
        });

    },[]);
    return(
        <>
        <h2>Item detail example</h2>
        <ItemDetail item={gameData}/>
        </>
    );
}

export default ItemDetailContainer