import React, {useState} from 'react'
import Cityfun from './Cityfun';

 export default function StateFun(){

     const [id , setId] = useState (101);
     const [name , setName] = useState('kartik');

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
         {name}
         <button onClick ={() => setName('nillu')}>
            change name
         </button>

         <Cityfun name = {name} />
     </div>
     </>
 )
 }