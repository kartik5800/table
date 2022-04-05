import React, {useState} from 'react'

 export default function Cityfun(){

     const [id , setId] = useState (101);
     const [city , setName] = useState('surat');

     const change =() => {
         setId(102);
     }



 return (
     <>
     <div>
         {id}
         <button onClick ={() => change()}>
            change id
         </button>
     </div>
     
     <div>
         {city}
         <button onClick ={() => setName('ahmedabad')}>
            change city
         </button>
     </div>
     </>
 )
 }
