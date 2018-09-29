import React, {Component} from 'react';
import {css} from 'emotion';
import {SearchBar} from './SearchBar'
import {ProductTable} from './ProductTable'

export class FilterableProductTable extends Component {
  // constructor(props){
  //   super();
  //   this.state;
  // }
  
  // Duda
  /* defaultProps = {
    "category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football",
  }; */

  render() {

    let color = "orange";
    const orange = css`
      border: 1px solid ${color};
      padding: 10px
    `

    return (
      <div className={orange}>
        <SearchBar/>
        <ProductTable/>
      </div>
    )
    
  }

}

