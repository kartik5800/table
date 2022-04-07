import React, { useState } from 'react';
import { Alert } from 'react-alert'

function Counter(props) {
    const [count , setcount] =useState(0)

    const incrementcounter = () => {
        if (count >= 5) {
            alert("ubho re")
            console.log('ubha rho');
             }else{
            setcount(() => count+1)

        }
        

    }

    const decrementcounter =() => {
        if (count <=0) {
            alert("ubho re")
            console.log('ubho re ne');
            
        }else{
        setcount (() => count-1)
        }
    }


    return (
        <div align='center'> 
        <h1>counter</h1>
            <button  onClick={() => incrementcounter()}> + </button>
            <span>{count}</span>
            <button onClick={() => decrementcounter()}> - </button>
        </div>

        
    );
}

export default Counter;