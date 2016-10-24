'use strict';
import React from 'react';
import {render} from 'react-dom';

const Appsas = React.createClass({
  render: function () {
    console.log('running!');
    return (
      <div style={{textAlign:"center"}}>
        <h1>{this.props.greeting}</h1>
      </div>
    );
  }
});

render(
  <Appsas greeting="Basic Basesasasa Setup - React Blueprints"/>,
  document.getElementById('container')
);
