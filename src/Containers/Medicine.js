import React from 'react';



function Medicine() {
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


export default Medicine;

