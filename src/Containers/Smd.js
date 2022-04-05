import React from 'react';

function Smd(props) {
//--------------------------------------------------------------
// ... operator for arrey
    let arr1=[10,20,30]
    let arr2=[40,50]

    //copy data
    let arr3=[...arr1]
    console.log(arr3);

    //concate data
    let arr4=[...arr1,...arr2]
    console.log(arr4);

    //merging data
    let arr5=[90,...arr4,100]
    console.log(arr5);

    //distructring

    let arr6=['kartik' , 'navdiya']
    let [fname,lname]=arr6;
    console.log(fname);


    //--------------------------------------------------------
    // ... operator for object

    let obj1 = {firstname :'kartik' , age : 30}
    let obj2 = {firstname :'nillu' , age : 32}

    // copy
 let obj3={...obj1}
    console.log(obj3);

    //concate

    let obj4={...obj1,...obj2}
    console.log(obj4);

    //merging
    let obj5 = {firstname :'kartik' , age : 30, city:'surat'}
    let obj6 = {firstname :'nillu' , age : 32}
    let obj7 ={...obj5,...obj6}
    console.log(obj7);

    //distructring

    let{firstname,age,city}=obj5
    // console.log(obj5.fnmae);
    console.log(firstname);



    return (
        <div>
            
        </div>
    );
}

export default Smd;