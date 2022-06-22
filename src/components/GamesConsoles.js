import React,{useState,useEffect} from 'react'
import gamesData from '../json/gamesData.json'
import {useParams} from 'react-router-dom'
import ItemListContainer from './ItemListContainer';
const GamesConsoles = () => {
    const [consoleData,setGameData] = useState([]);
    useEffect( ()=>{
        const bringGame = new Promise ((res,rej)=>{
            setTimeout(()=>{ 
                res(gamesData)
                rej("There's been an error loading the data")
            },2000);
            
        });
        bringGame.then((res) =>{
            setGameData(res)
        })
        .catch(rej =>{
            console.error(rej)
        });

    },[gameConsole]);
  return (
    <div className='row list'>
                <ItemListContainer items={consoleData}/>
    </div>
  )
}

export default GamesConsoles