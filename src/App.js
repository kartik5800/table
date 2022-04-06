// import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Smd from './Containers/Smd';
import State from './Containers/State';
import Country from './Containers/Country';
import Statefun from './Containers/Statefun';
import Cityfun from './Containers/Cityfun';
import Medicine from './Containers/Medicine';
import React from 'react';
import Employee from './Containers/Employee';
import Counter from './Containers/Counter';

function App(props) {
  return (
    <div>

      {/* <Employee />
      <Smd />
      <State />
      <Country />

      <Statefun />

      <Cityfun />

      < Medicine /> */}

      <Counter />


    </div>
  );
}

export default App;