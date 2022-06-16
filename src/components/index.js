import React from 'react'
import ItemListContainer from './ItemListContainer'

const Index = () => {
  return (<>
    <div className="header">
                <header className="App-header">
                <h1>Cd Romance</h1>
                <p>
                    The best place for your retro gaming needs!
                </p>
                </header>
      </div>
            <hr/> 
                <h2 className='container-fluid'><u>Our latest games</u></h2>
        <ItemListContainer/>
  </>
  )
}

export default Index