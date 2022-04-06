import React, { useState } from 'react';

function Counter(props) {
    const [count , setcount] =useState(0)

    const incrementcounter = () => {
        if (count >= 5) {
            console.log('ubha rho');
             }else{
            setcount(() => count+1)

        }
        

    }

    const decrementcounter =() => {
        if (count <=0) {
            console.log('ubho re ne');
            
        }else{
        setcount (() => count-1)
        }
    }


    return (
        <div align='center' > 
            <button onClick={() => incrementcounter()}> + </button>
            <span>{count}</span>
            <button onClick={() => decrementcounter()}> - </button>
        </div>

        
    );
}

export default Counter;