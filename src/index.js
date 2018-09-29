import React from 'react';
import ReactDOM from 'react-dom'
import {FilterableProductTable} from './FilterableProductTable'
import data from './data.json' // se lo pasamos por prop al componente hijo
import _ from 'lodash'

ReactDOM.render(
    <FilterableProductTable/>,
    document.getElementById('root')
);


// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}