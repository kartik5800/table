import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function App() {
  let data = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ];

  let filterdata = data.filter((d, i) => (d.status === true));
  let totale = filterdata.reduce((acc, d) => acc+d.salary + d.bonus, 0)
  // console.log(filterdata.length);
  // console.log(totale)

  return (
    <div>
      <table border="1px" >
        <tr>
          <th>name</th>
          <th>age</th>
          <th>salary</th>
          <th>bonus</th>
          <th>status</th>
          <th>total salary</th>
          <th>total expence</th>
        </tr>
        {
          filterdata.map((d, i) => {
            return (
              <>


                <tr>
                  <td> {d.name} </td>
                  <td> {d.age} </td>
                  <td> {d.salary} </td>
                  <td> {d.bonus} </td>
                  <td> {d.status.toString()} </td>
                  <td>{d.salary+d.bonus}</td>
                  {i === 0 ? <td rowSpan={filterdata.length}>{totale}</td> : null}
                </tr>
              </>
            );
          })
        }
      </table>
    </div>
  );
}

export default App;