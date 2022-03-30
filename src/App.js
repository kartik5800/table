import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// function App() {
//   let data = [
//     {
//       name: "amit",
//       age: 35,
//       salary: 40000,
//       bonus: 1000,
//       status: true
//     },
//     {
//       name: "ajay",
//       age: 25,
//       salary: 38000,
//       bonus: 2000,
//       status: false
//     },
//     {
//       name: "mayur",
//       age: 23,
//       salary: 50000,
//       bonus: 500,
//       status: true
//     },
//     {
//       name: "jay",
//       age: 29,
//       salary: 35000,
//       bonus: 600,
//       status: true
//     },
//     {
//       name: "raj",
//       age: 33,
//       salary: 22000,
//       bonus: 2000,
//       status: true
//     },
//   ];

//   let filterdata = data.filter((d, i) => (d.status === true));
//   let totale = filterdata.reduce((acc, d) => acc + d.salary + d.bonus, 0)
//   // console.log(filterdata.length);
//   // console.log(totale)

//   return (
//     <div id='emp' color='blue'>
//       <h1 align='center'>emplyee data</h1>
//       <table border="1px" align="center" bordercolor='red'>
//         <tr>
//           <th>name</th>
//           <th>age</th>
//           <th>salary</th>
//           <th>bonus</th>
//           <th>status</th>
//           <th>total salary</th>
//           <th>total expence</th>
//         </tr>
//         {
//           filterdata.map((d, i) => {
//             return (
//               <>


//                 <tr>
//                   <td> {d.name} </td>
//                   <td> {d.age} </td>
//                   <td> {d.salary} </td>
//                   <td> {d.bonus} </td>
//                   <td> {d.status.toString()} </td>
//                   <td>{d.salary + d.bonus}</td>
//                   {i === 0 ? <td rowSpan={filterdata.length}>{totale}</td> : null}
//                 </tr>
//               </>
//             );
//           })
//         }
//       </table>
//     </div>
//   );
// }

// export default App;


function App1() {
  let Medicine =
    [
      {
        id: 101,
        name: 'Abacavir',
        quantity: 25,
        price: 150,
        expiry: 2022,
        status: true
      },
      {
        id: 102,
        name: 'Eltrombopag',
        quantity: 90,
        price: 550,
        expiry: 2021,
        status: true
      },
      {
        id: 103,
        name: 'Meloxicam',
        quantity: 85,
        price: 450,
        expiry: 2025,
        status: false
      },
      {
        id: 104,
        name: 'Allopurinol',
        quantity: 50,
        price: 600,
        expiry: 2023,
        status: true
      },
      {
        id: 105,
        name: 'Phenytoin',
        quantity: 63,
        price: 250,
        expiry: 2021,
        status: false
      }
    ];
  let filtermedicin = Medicine.filter((m, i) => (m.status === true));
  let total = filtermedicin.reduce((acc, m) => acc + m.quantity, 0)
  // console.log(filterdata.length);
  // console.log(total)

  return (
    <div id='med'>
      <h1 align='center' color='green'>Medicine data</h1>
      <table border="1px" align="center" bordercolor='pink' cellPadding={12} cellSpacing='5'>
        <tr bgcolor='red'>
          <th>name</th>
          <th>quantity</th>
          <th>price</th>
          <th>expiry</th>
          <th>status</th>
          <th>total price</th>
          <th>total stock</th>
        </tr>
        {
          filtermedicin.map((m, i) => {
            return (
              <>


                <tr>
                  <td> {m.name} </td>
                  <td> {m.quantity} </td>
                  <td> {m.price} </td>
                  <td> {m.expiry} </td>
                  <td> {m.status.toString()} </td>
                  <td>{m.quantity * m.price}</td>
                  {i === 0 ? <td rowSpan={filtermedicin.length}>{total}</td> : null}
                </tr>
              </>
            );
          })
        }
      </table>
    </div>
  );
}


export default App1;


