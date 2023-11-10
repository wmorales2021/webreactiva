import React from "react";
import Cabecera from './cabecera.jsx';
import Pie from './pie.jsx';
import Central from './central.jsx';

const Home =()=>{
    return ( 
        <div className="App">
            <header className="App-header">
            <Cabecera></Cabecera>
                <p>
                </p>
                <p>
                <Central></Central>
                </p>
                <Pie></Pie>
            </header>
        </div>
    )
}
export default Home;