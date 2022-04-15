// import React, { PureComponent } from 'react';
import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import PropTypes from 'prop-types';
import Smd from './Containers/Smd';
import State from './Containers/State';
import Country from './Containers/Country';
import Statefun from './Containers/Statefun';
import Cityfun from './Containers/Cityfun';
import Medicine from './Containers/Medicine';
import Employee from './Containers/Employee';
import Counter from './Containers/Counter';
import Clock from './Containers/Clock';
import Cloclfun from './Containers/Cloclfun';
import Loading from './Components/Loading/Loading';
import Home from './Containers/Home/Home';


const Homewithloading = Loading(Home)
function App(props) {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);

  const userdata = [
    {
      id: 101,
      name: 'kartik'
    },
    {
      id: 102,
      name: 'nillu'
    }
  ]
  useEffect(
    () => {
      setloading(true)
      setTimeout(() => {setloading(false); setdata(userdata)}, 2000)
    },
[])

  return (
      <Homewithloading
      isloading={loading}
      data={data}
      />
  );
}

export default App;