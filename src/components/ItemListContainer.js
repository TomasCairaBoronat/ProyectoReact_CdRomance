import React,{useState,useEffect} from 'react'
import '../styles/ItemListContainer.css'
import gamesData from '../json/gamesData.json'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {
    const [gameData,setGameData] = useState([]);
    const{consoleId} = useParams();
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

    },[consoleId]);
    return(
        <div>
        <div className="header">
                <header className="App-header">
                <h1>Cd Romance</h1>
                <p>
                    The best place for your retro gaming needs!
                </p>
                </header>
      </div>
            <hr/>
            <ItemList items={gameData}/>
        </div>
    );
};
export default ItemListContainer;