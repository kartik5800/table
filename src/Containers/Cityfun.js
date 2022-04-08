// import React, {useState} from 'react'

//  export default function Cityfun(){

//      const [id , setId] = useState (101);
//      const [city , setName] = useState('surat');

//      const change =() => {
//          setId(102);
//      }



//  return (
//      <>
//      <div>
//          {id}
//          <button onClick ={() => change()}>
//             change id
//          </button>
//      </div>
     
//      <div>
//          {city}
//          <button onClick ={() => setName('ahmedabad')}>
//             change city
//          </button>
//      </div>
//      </>
//  )
//  }

import React from 'react';

function Cityfun(props) {

    console.log(props.name);
    return (
        <div>

            <h1>city function base components</h1>
            <>
                
               {
                    props.name === 'kartik' ? 'navdiya' :
                    props.name === 'nillu' ? 'ukani' :  ''

                }
                </>
            
        </div>
    );
}

export default Cityfun;
